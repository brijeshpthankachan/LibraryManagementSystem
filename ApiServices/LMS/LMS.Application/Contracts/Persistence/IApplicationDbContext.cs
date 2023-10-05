using LMS.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace LMS.Application.Contracts.Persistence;

public interface IApplicationDbContext
{
    DbSet<Book> Books { get; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);

}
