using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using WebAPI_Practice.Models;
using WebAPI_Practice.Services;

namespace WebAPI_Practice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private readonly ApplicationUserServices _appService;

        public ApplicationUserController(ApplicationUserServices appService)
        {
            _appService = appService;
        }

        [HttpPost]
        [Route("Register")]
        //POST : api/ApplicationUser/Register
        public async Task<object> PostApplicationUser(ApplicationUserModel model)
        {
             var result = await _appService.PostApplicationUser(model);
             return Ok(result);
        }

        [HttpPost]
        [Route("Login")]
        //POST: /api/ApplicationUser/login
        public async Task<IActionResult> Login(LoginModel model)
        {
            var token = await _appService.Login(model);
            return Ok( new{ token });
        }
    }
}