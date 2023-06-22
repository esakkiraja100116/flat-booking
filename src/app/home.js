import { SelectRoom } from './home/select'
import { Team } from './home/team'
import { Service } from './home/service'

const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
  ];
  const stats = [
    { name: "Offices worldwide", value: "12" },
    { name: "Full-time colleagues", value: "300+" },
    { name: "Hours per week", value: "40" },
    { name: "Paid time off", value: "Unlimited" },
  ];

  export function ExploreBtn(){
    return (
        <button
                type="submit"
                className="m-6 flex-none rounded-full bg-indigo-500 p-3 tracking-wider sm:text-md font-sm text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Create a listing room for free
        </button>
    );
  }
  
  export function About() {
    return (
    <>
   
        <div className="relative isolate overflow-hidden bg-gray-900 py-44 mt-0 drop-shadow-2xl" >
          {/* <img
            src="/background.png"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          /> */}
         <div className="text-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-7xl lg:mx-0">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                    Find your next flatmate in a heartbeat!
                    </h1>
                   
                </div>

                <div className="rounded-3xl mt-10 p-5 bg-rose-50 grid sm:grid-cols-3 gap-x-8 gap-y-3">
                    <div>
                        <SelectRoom/> 
                    </div>
                    <div>
                        <SelectRoom/> 
                    </div>
                    <div>
                        <SelectRoom/> 
                    </div>
                </div> 
                <p className="mt-8 text-lg leading-8 text-gray-300">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                        lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                        fugiat aliqua em cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                        fugiat aliqu.
                </p>

                <div className="sm:grid sm:grid-cols-2 gap-x-3  gap-y-1">
                    <div className='sm:text-right' >
                        <ExploreBtn/>  
                    </div>
                    <div className='sm:text-left'>
                        <ExploreBtn/> 
                    </div>
                </div> 
                    
            </div>
         </div>
          
        </div>
       
        <Service/>
        <Team/>
    </>
    );
  }
  