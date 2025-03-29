using FullStackFun.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FullStackFun.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarriottFoodController : ControllerBase
    {
        private FoodDbContext _foodContext;

        public MarriottFoodController(FoodDbContext temp) 
        { 
            _foodContext = temp;
        }
        [HttpGet(Name = "GetMarriottFood")]
        public IEnumerable<MarriottFood> Get()
        {
            var FoodList = _foodContext.Foods.ToList();
            
            return FoodList;
        }
    }
}
