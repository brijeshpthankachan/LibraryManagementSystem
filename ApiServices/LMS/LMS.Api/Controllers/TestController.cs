using LMS.Api.Controllers.Common;
using LMS.Application.Features.BookManagement.Commands;
using Microsoft.AspNetCore.Mvc;

namespace LMS.Api.Controllers;



public class TestController : BaseController
{

    [HttpPost]
    [Route("books")]
    public async Task<IActionResult> AddBook([FromBody] AddBookCommand command)
    {
        var result = await Mediator.Send(command);
        return Ok(result);
    }

}
