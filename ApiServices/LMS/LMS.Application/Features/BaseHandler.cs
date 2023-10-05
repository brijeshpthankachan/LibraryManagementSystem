using LMS.Application.Contracts.Persistence;
using MediatR;
using Microsoft.Extensions.Logging;

namespace LMS.Application.Features;

public abstract class BaseHandler<TRequest, TResponse> : IRequestHandler<TRequest, TResponse> where TRequest : IRequest<TResponse>
{
    protected readonly IApplicationDbContext Context;
    protected readonly ILogger Logger;



    protected BaseHandler(IApplicationDbContext context) => Context = context;


    protected BaseHandler(IApplicationDbContext context, ILogger<BaseHandler<TRequest, TResponse>> logger)
    {
        Context = context;
        Logger = logger;
    }

    public abstract Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken);
}
