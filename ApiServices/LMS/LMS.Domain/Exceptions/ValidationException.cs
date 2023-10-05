namespace LMS.Domain.Exceptions;

public sealed class ValidationException : ApplicationException
{
    public IReadOnlyDictionary<string, string[]> ErrorsDictionary { get; }

    public ValidationException(IReadOnlyDictionary<string, string[]> errorsDictionary)
        : base("Validation ", "One or more validation errors occurred")
    {
        ErrorsDictionary = errorsDictionary;
    }
}