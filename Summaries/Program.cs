using Summaries.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddApplicationInsightsTelemetry();
builder.Services.AddTransient<IBookService, BookService>();

//https://www.angularjswiki.com/angular/origin-http-localhost4200-has-been-blocked-by-cors-policy-in-angular-error/

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularOrigins",
        buider =>
        {
            buider.WithOrigins("https://localhost:44479").AllowAnyHeader().AllowAnyMethod();
        });
}
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors("AllowAngularOrigins");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
