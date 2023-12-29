using Microsoft.AspNetCore.Mvc;

namespace ExemploAsp.Controllers
{
    public class ContatoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
