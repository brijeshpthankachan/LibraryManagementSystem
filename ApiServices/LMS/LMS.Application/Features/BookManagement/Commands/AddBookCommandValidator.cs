using FluentValidation;

namespace LMS.Application.Features.BookManagement.Commands;

public class AddBookCommandValidator : AbstractValidator<AddBookCommand>
{
    public AddBookCommandValidator()
    {
        RuleFor(book => book.BookName).Must(abc).WithMessage("Book Name cannot be string");
        RuleFor(book => book.BookName).NotNull().NotEmpty().WithMessage("Book name cannot be empty");
    }

    private bool abc(string bookname)
    {
        if (bookname == "string")
        {
            return false;
        }
        return true;
    }
}
