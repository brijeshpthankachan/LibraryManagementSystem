using LMS.Application.Contracts.Persistence;
using LMS.Domain.Entities;
using MediatR;
using Microsoft.Extensions.Logging;

namespace LMS.Application.Features.BookManagement.Commands;

public class AddBookCommand : IRequest<long>
{
    public string BookName { get; set; }
}


public class AddBookCommandHandler : BaseHandler<AddBookCommand, long>
{
    public AddBookCommandHandler(IApplicationDbContext context, ILogger<BaseHandler<AddBookCommand, long>> logger) : base(context, logger)
    {
    }

    public override async Task<long> Handle(AddBookCommand request, CancellationToken cancellationToken)
    {
        Book newBook = new() { Name = request.BookName };
        Context.Books.Add(newBook);
        await Context.SaveChangesAsync(cancellationToken);
        return newBook.Id;
    }

}
