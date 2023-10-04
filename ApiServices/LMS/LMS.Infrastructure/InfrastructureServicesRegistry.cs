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
    }

    internal static void AddPostgres(IServiceCollection services, IConfiguration configuration)
    {
        services.AddEntityFrameworkNpgsql().AddDbContext<ApplicationDbContext>(options =>
            options.UseNpgsql(configuration.GetConnectionString("PostgreSQL")));

    }

}
