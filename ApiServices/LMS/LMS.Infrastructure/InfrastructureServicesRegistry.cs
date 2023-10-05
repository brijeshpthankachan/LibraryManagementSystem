using LMS.Application.Contracts.Persistence;
using LMS.Infrastructure.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace LMS.Infrastructure;

public static class InfrastructureServicesRegistry
{
    public static void AddInfrastructureRegistryServices(this IServiceCollection services, IConfiguration configuration)
    {
        AddPostgres(services, configuration);
        services.AddScoped<IApplicationDbContext, ApplicationDbContext>();
    }

    internal static void AddPostgres(IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDbContext>(options => options.UseNpgsql(configuration.GetConnectionString("PostgreSQL")));
    }

}
