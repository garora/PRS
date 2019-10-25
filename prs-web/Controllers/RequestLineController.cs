using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using PRS.Models;

namespace PRS.Controllers
{
    public class RequestLineController : Controller
    {
        private readonly MyDb _context;     /*Name changed from SqlPrsContext*/

        public RequestLineController(MyDb context)      /*Name changed from SqlPrsContext*/
        {
            _context = context;
        }

        // GET: RequestLine
        public async Task<IActionResult> Index()
        {
            var sqlPrsContext = _context.RequestLines.Include(r => r.Product).Include(r => r.Request);
            return View(await sqlPrsContext.ToListAsync());
        }

        // GET: RequestLine/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var requestLines = await _context.RequestLines
                .Include(r => r.Product)
                .Include(r => r.Request)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (requestLines == null)
            {
                return NotFound();
            }

            return View(requestLines);
        }

        // GET: RequestLine/Create
        public IActionResult Create()
        {
            ViewData["ProductId"] = new SelectList(_context.Products, "Id", "Name");
            ViewData["RequestId"] = new SelectList(_context.Requests, "Id", "DeliveryMode");
            return View();
        }

        // POST: RequestLine/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,RequestId,ProductId,Quantity")] RequestLines requestLines)
        {
            if (ModelState.IsValid)
            {
                _context.Add(requestLines);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["ProductId"] = new SelectList(_context.Products, "Id", "Name", requestLines.ProductId);
            ViewData["RequestId"] = new SelectList(_context.Requests, "Id", "DeliveryMode", requestLines.RequestId);
            return View(requestLines);
        }

        // GET: RequestLine/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var requestLines = await _context.RequestLines.FindAsync(id);
            if (requestLines == null)
            {
                return NotFound();
            }
            ViewData["ProductId"] = new SelectList(_context.Products, "Id", "Name", requestLines.ProductId);
            ViewData["RequestId"] = new SelectList(_context.Requests, "Id", "DeliveryMode", requestLines.RequestId);
            return View(requestLines);
        }

        // POST: RequestLine/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,RequestId,ProductId,Quantity")] RequestLines requestLines)
        {
            if (id != requestLines.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(requestLines);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!RequestLinesExists(requestLines.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["ProductId"] = new SelectList(_context.Products, "Id", "Name", requestLines.ProductId);
            ViewData["RequestId"] = new SelectList(_context.Requests, "Id", "DeliveryMode", requestLines.RequestId);
            return View(requestLines);
        }

        // GET: RequestLine/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var requestLines = await _context.RequestLines
                .Include(r => r.Product)
                .Include(r => r.Request)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (requestLines == null)
            {
                return NotFound();
            }

            return View(requestLines);
        }

        // POST: RequestLine/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var requestLines = await _context.RequestLines.FindAsync(id);
            _context.RequestLines.Remove(requestLines);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool RequestLinesExists(int id)
        {
            return _context.RequestLines.Any(e => e.Id == id);
        }
    }
}
