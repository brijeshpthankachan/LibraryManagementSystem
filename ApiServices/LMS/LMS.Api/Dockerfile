FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["LMS.Api/LMS.Api.csproj", "LMS.Api/"]
RUN dotnet restore "LMS.Api/LMS.Api.csproj"
COPY . .
WORKDIR "/src/LMS.Api"
RUN dotnet build "LMS.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "LMS.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "LMS.Api.dll"]
