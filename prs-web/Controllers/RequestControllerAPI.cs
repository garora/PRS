using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PRS.Models;

namespace PRS.Controllers
{
    [Route("api/Request")]
    [ApiController]
    public class RequestControllerAPI : ControllerBase
    {
        #region Public Constructors

        #region Public Constructors

        #region Public Constructors

        #region Public Constructors

        public RequestControllerAPI(MyDb context)
        {
            _context = context;
        }

        #endregion Public Constructors

        #endregion Public Constructors

        #endregion Public Constructors

        #endregion Public Constructors

        #region Public Methods

        #region Public Methods

        #region Public Methods

        #region Public Methods

        // DELETE: api/RequestControllerAPI/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Requests>> DeleteRequests(int id)
        {
            var requests = await _context.Requests.FindAsync(id);
            if (requests == null)
            {
                return NotFound();
            }

            _context.Requests.Remove(requests);
            await _context.SaveChangesAsync();

            return requests;
        }

        // GET: api/RequestControllerAPI
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Requests>>> GetRequests()
        {
            return await _context.Requests.ToListAsync();
        }

        // GET: api/RequestControllerAPI/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Requests>> GetRequests(int id)
        {
            var requests = await _context.Requests.FindAsync(id);

            if (requests == null)
            {
                return NotFound();
            }

            return requests;
        }

        // GET: api/GetRequestsForReview
        [Route("/api/Request/Review")]     // add slash to beginning because it is absolute route to method
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Requests>>> GetRequestsForReview()
        {

            var items = from r in _context.Requests                                             // another option: query syntax
                        where r.Status == "Review"
                        //where r.UserId != id
                        select r;
            return await items.ToListAsync();
        }

        // POST: api/RequestControllerAPI
        [HttpPost]
        public async Task<ActionResult<Requests>> PostRequests(Requests requests)
        {
            _context.Requests.Add(requests);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRequests", new { id = requests.Id }, requests);
        }

        // PUT: api/RequestControllerAPI/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRequests(int id, Requests requests)
        {
            if (id != requests.Id)
            {
                return BadRequest();
            }

            _context.Entry(requests).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RequestsExists(id))
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

        [Route("/api/SetStatusApproved/{id}")]          // Status-Approved
        [HttpGet]
        public async Task<ActionResult<Requests>> SetStatusApproved(int id)
        {
            var requests = await _context.Requests.FindAsync(id);

            if (requests == null)
            {
                return NotFound();                  // returns 404 (error code)
            }

            requests.Status = "Approved";             // will use button (Ajax) to call this
            await _context.SaveChangesAsync();         // change save is done in context // returns true or false

            return Ok();    // returns code 200 (success code)
        }

        [Route("/api/SetStatusRejected/{id}")]          // Status-Rejected
        [HttpGet]
        public async Task<ActionResult<Requests>> SetStatusRejected(int id)
        {
            var requests = await _context.Requests.FindAsync(id);

            if (requests == null)
            {
                return NotFound();                  // returns 404 (error code)
            }

            requests.Status = "Rejected";             // will use button (Ajax) to call this
            await _context.SaveChangesAsync();         // change save is done in context // returns true or false

            return Ok();    // returns code 200 (success code)
        }

        [Route("/api/SetStatusReview/{id}")]
        [HttpGet]
        public async Task<ActionResult<Requests>> SetStatusReview(int id)
        {
            var requests = await _context.Requests.FindAsync(id);

            if (requests == null)
            {
                return NotFound();                  // returns 404 (error code)
            }

            requests.Status = "Review";             // will use button (Ajax) to call this
            await _context.SaveChangesAsync();         // change save is done in context // returns true or false

            return Ok();    // returns code 200 (success code)
        }

        #endregion Public Methods

        #endregion Public Methods

        #endregion Public Methods

        #endregion Public Methods

        #region Private Fields

        #region Private Fields

        #region Private Fields

        #region Private Fields

        private readonly MyDb _context;

        #endregion Private Fields

        #endregion Private Fields

        #endregion Private Fields

        #endregion Private Fields

        #region Private Methods

        #region Private Methods

        #region Private Methods

        #region Private Methods

        //return await _context       //the database           // this option is called lynq
        //    .Requests               // the entity
        //    .Where(r => r.Status == "Review")       // filter for requests in review status
        //    .ToListAsync();             //return async collection
        // Status-Review
        // GET: api/SetStatusReview/5       /// Request that we are going to update status  // 090619p1.0140
        //  method route is appended to -- route unless we place slash in front of
        // GET: api/SetStatusApproved/5
        // GET: api/SetStatusRejected/5
        private bool RequestsExists(int id)
        {
            return _context.Requests.Any(e => e.Id == id);
        }

        #endregion Private Methods

        #endregion Private Methods

        #endregion Private Methods

        #endregion Private Methods

    }
}