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
    [Route("api/user")]
    [ApiController]
    public class UserControllerAPI : ControllerBase
    {
        private readonly MyDb _context;

        public UserControllerAPI(MyDb context)
        {
            _context = context;
        }

        // GET: api/UsersControllerAPI      //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Users>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/UsersControllerAPI/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Users>> GetUsers(int id)
        {
            var users = await _context.Users.FindAsync(id);

            if (users == null)
            {
                return NotFound();
            }

            return users;
        }





        // GET: api/UsersControllerAPI/Username/password          
       
        [Route("/api/user/{Username}/{password}")]
        [HttpGet]
        public async Task<ActionResult<Users>> GetUsers(string Username, string password)
        {
            var users = await _context
                .Users
                .Where(u => u.Username == Username && u.Password == password)
                .FirstOrDefaultAsync();    
              //090619p1.58 //FindAsync(id) changed to Where

            if (users == null)
            {
                return NotFound();
            }

            return users;
        }
                     

        // PUT: api/UsersControllerAPI/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsers(int id, Users users)
        {
            if (id != users.Id)
            {
                return BadRequest();
            }

            _context.Entry(users).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsersExists(id))
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

        // POST: api/UsersControllerAPI
        [HttpPost]
        public async Task<ActionResult<Users>> PostUsers(Users users)
        {
            _context.Users.Add(users);
try {
                await _context.SaveChangesAsync();

            }
       catch(Exception ex)
            {
                var e = ex;
            }    

            return CreatedAtAction("GetUsers", new { id = users.Id }, users);
        }

        // DELETE: api/UsersControllerAPI/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Users>> DeleteUsers(int id)
        {
            var users = await _context.Users.FindAsync(id);
            if (users == null)
            {
                return NotFound();
            }

            _context.Users.Remove(users);
            await _context.SaveChangesAsync();

            return users;
        }

        private bool UsersExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
