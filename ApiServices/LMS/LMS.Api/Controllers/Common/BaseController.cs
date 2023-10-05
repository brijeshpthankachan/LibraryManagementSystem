using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace LMS.Api.Controllers.Common;

[Route("api")]
[ApiController]
public class BaseController : ControllerBase
{
    /// </summary>
    private IMediator _mediator;
    protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();


}
