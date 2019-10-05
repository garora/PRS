﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PRS.Models;

namespace PRS.Controllers
{
    [Route("api/RequestLine")]
    [ApiController]
    public class RequestLineControllerAPI : ControllerBase
    {
        private readonly MyDb _context;

        public RequestLineControllerAPI(MyDb context)
        {
            _context = context;
        }

        // GET: api/RequestLineControllerAPI
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RequestLines>>> GetRequestLines()
        {
            return await _context.RequestLines.ToListAsync();
        }

        // GET: api/RequestLineControllerAPI/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RequestLines>> GetRequestLines(int id)
        {
            var requestLines = await _context.RequestLines.FindAsync(id);

            if (requestLines == null)
            {
                return NotFound();
            }

            /* CALL RECALC */
            var success = RecalculateRequestTotal(id);
            if (!success) { return this.StatusCode(500); }
          

            return requestLines;
        }

        // PUT: api/RequestLineControllerAPI/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRequestLines(int id, RequestLines requestLines)
        {
            if (id != requestLines.Id)
            {
                return BadRequest();
            }

            _context.Entry(requestLines).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();

                /* CALL RECALC */
                var success = RecalculateRequestTotal(id);
                if (!success) { return this.StatusCode(500); }
               
               
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RequestLinesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
                       

            return NoContent();
        }

        // POST: api/RequestLineControllerAPI
        [HttpPost]
        public async Task<ActionResult<RequestLines>> PostRequestLines(RequestLines requestLines)
        {
            _context.RequestLines.Add(requestLines);
            await _context.SaveChangesAsync();
            /* CALL RECALC */
            var success = RecalculateRequestTotal(requestLines.RequestId);
            if (!success) { return this.StatusCode(500); }         
            return CreatedAtAction("GetRequestLines", new { id = requestLines.Id }, requestLines);
        }

        // DELETE: api/RequestLineControllerAPI/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<RequestLines>> DeleteRequestLines(int id)
        {
            var requestLines = await _context.RequestLines.FindAsync(id);
            if (requestLines == null)
            {
                return NotFound();
            }
            _context.RequestLines.Remove(requestLines);
            await _context.SaveChangesAsync();           
            /* CALL RECALC */
            var success = RecalculateRequestTotal(id);
            if ( !success ) { return this.StatusCode(500); }          
              return requestLines;           
        }
        private bool RequestLinesExists(int id)
        {
            return _context.RequestLines.Any(e => e.Id == id);
        }


        // Recalculate Total:
        // PUT: api/RequestLineControllerAPI/5(reqId) 
        [HttpDelete("{id}")]// C#Include  SqlServer Join
        private bool RecalculateRequestTotal(int requestId)
        {
            var request = _context.Requests
                     .SingleOrDefault(r => r.Id == requestId);
            if ( request == null)
            {
                Console.WriteLine("There are no pending requests for " + request.User + "."); 
                Console.Out.Close();
                return false; //  same as return NotFound (if it were a webservice) using T/F here because we will probably be using it i
            }
            request.Total = _context.RequestLines
                .Where(l => l.RequestId == requestId)
                .Sum(l => l.Quantity * l.Product.Price);
            if (request.Status == "REVIEW")
            {
                request.Status = "REVISED";
                Console.WriteLine(request.User + "'s request has been revised." + request.User);
            }
            _context.SaveChanges();
            return true;                 //  same as return Ok (if it were a webservice)
        }
       
    }
}
