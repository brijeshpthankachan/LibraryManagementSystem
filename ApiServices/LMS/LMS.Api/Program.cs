using LMS.Api.MiddleWares;
using LMS.Application;
using LMS.Infrastructure;
using LMS.Infrastructure.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using Serilog;

var configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json", optional: false).Build();
Log.Logger = new LoggerConfiguration().ReadFrom.Configuration(configuration).CreateLogger();

try
{
    Log.Information("Starting up Api service...");
    var builder = WebApplication.CreateBuilder(args);
    builder.Logging.ClearProviders();
    builder.Logging.AddConsole();
    builder.Host.UseSerilog();
    builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
    builder.Services.AddTransient<ExceptionHandlingMiddleWare>();
    builder.Services.AddInfrastructureRegistryServices(builder.Configuration);
    builder.Services.AddApplicationRegistryServices();
    var app = builder.Build();
    if (app.Environment.IsDevelopment())
    {
        var scope = app.Services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        await db.Database.MigrateAsync();
        app.UseSwagger();
        app.UseSwaggerUI();
    }
    app.UseHttpsRedirection();
    app.UseAuthorization();
    app.MapControllers();
    app.Run();
    Log.Information("LMS Api service started. Press Ctrl + C to shut down.");
}
catch (Exception ex)
{
    Log.Fatal(ex, "Application terminated unexpectedly");
}
finally
{
    Log.CloseAndFlush();
}