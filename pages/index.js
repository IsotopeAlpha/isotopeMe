import Head from 'next/head'
import Image from 'next/image'
import prof from '../public/prof.jpg';

export default function Home() {
  return (
    <>
    <Head>
      <title>Isotope's CV</title>
    </Head>
    <div className='w-[100vw] md:mr-6 p-6 bg-white mx-auto text-black'>
      <div className='w-[70vw] justify-between flex'>
        <div className='text-3xl text-blue-800 font-bold italic uppercase'>
          <div  className='text-3xl text-blue-800 font-bold italic uppercase'>Israel Gayina</div>
          <div className='text-xl text-blue-800 font-bold italic '>
            Computer Engineer
          </div>
        </div>
        <div> 
            <Image src={prof} alt="Profile Image" className="absolute w-[15vw] md:w-[10vw]"/>
          </div>
      </div>
      
      <br/>
      <div className='md:text-md italic '>
        <div className='flex flex-row'><b className='text-blue-800'>Address:</b>  VK-0289-0336, Keta, Volta, Ghana.</div>
        <div className='flex flex-row'><b className='text-blue-800'>Phone:</b>   +233594891672</div>
        <div className='flex flex-row'><b className='text-blue-800'>Whatsapp Number:</b>  +233506260276</div>
        <div className='flex flex-row'><b className='text-blue-800'>E-mail:</b>   israelgayina606@gmail.com, isotopegayina606@gmail.com</div>
        <div className='flex flex-row'><b className='text-blue-800'>Github Porfolio:</b>   https://github.com/IsotopeAlpha</div>
      </div>
      <br />
      <div className='md:w-[80vw] md:ml-[8vw] '>
      Detail-oriented, organized, and meticulous employee. Works at a fast pace to meet tight deadlines.
      Enthusiastic team player ready to contribute to company success. Software Developer is talented at translating customer requirements into tesdiv engineering plans.
      Maintains exceptional development quality from conception through distribution. Works alongside clients and colleagues through all stages of development to produce outstanding final products.
      Result-focused software engineering professional with extensive experience in development and testing.
      Well-versed in promoting objective-oriented approaches to real-time software development. Analytical and detail-oriented. 
      Hands-on Software Developer is eager to collaborate with customers to find optimal solutions. 
      Carefully customizes each product to user needs and budgets. Provides reliably actionable code and software assets for customers and internal data libraries. 
      Enthusiastic technical professional with a complete understanding of the entire software development cycle. A hardworking and passionate job seeker with strong organizational skills eager to secure an entry-level Software Developer position. 
      Ready to help the team achieve company goals. Very good in troubleshooting and diagnosing computers for hidden faults and finding solutions to them.
      </div>
      <div className='bg-gray-200 mt-5 p-3 border-rounded md:mr-4'>
        <div className='text-xl text-blue-800 font-bold italic '>Work History</div>
          <br/>
          <div className='md:text-lg text-blue-800 font-bold italic md:flex'>
              <div className='text-black  md:border-[10px]'>2021-11 to 2022-08 </div> 	
              <div className='md:border-[10px]'>Software Developer </div> 
              <div className='text-black md:border-[10px]'>Nerasol Ghana Limited, Adjiringanor, Accra, Ghana.</div>    
           </div>
          <div>
            <ul className='list-disc list-inside'>
              <li>Collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development.</li>
              <li>Documented technical workflows and knowledge to educate newly hired employees.</li>
              <li>Discussed issues with team members to provide resolution and apply best practices.</li>
              <li>Participated in software field testing to verify the performance of developed projects.</li>
              <li>Designed intuitive graphical user interfaces to improve user experience.</li>
              <li>Collaborated on stages of the system development lifecycle from requirement gathering to production release.</li>
            </ul>
          </div>
          <br/>
          <div className='text-lg text-blue-800 font-bold italic md:flex'>
              <div className='text-black  md:border-[10px]'>2020-06 to 2020-08</div> 	
              <div className='md:border-[10px]'>Hardware Engineer</div> 
              <div className='text-black md:border-[10px]'>University of Ghana Computing Systems, Legon, Accra, Ghana.</div>    
          </div>
          <div>
            <ul className='list-disc list-inside'>
              <li>Collaborated with the supervisor to diagnose and troubleshoot computers.</li>
              <li>Fixed and repaired computer parts.</li>
              <li>Resolved software issues with computers.</li>
              <li>Clean and keep computers and computer parts clean.</li>
              <li>Maintained computers and computer-related accessories.</li>
            </ul>
          </div>
          <br/>
          <div className='text-lg text-blue-800 font-bold italic md:flex'>
              <div className='text-black  md:border-[10px]'>2019-06 to 2019-08<br/>2018-06 to 2018-08</div> 	
              <div className='md:border-[10px]'>Print Shop Attendant</div> 
              <div className='text-black md:border-[10px]'>Kensallah Print Shop and Services, Keta, Volta, Ghana.</div>    
           </div>
          <div>
            <ul className='list-disc list-inside'>
              <li>Operated photocopiers and printers, trimmed stock to particular sizes, and bound booklets using spiral or saddle techniques to complete customer job requests.</li>
              <li>Created customized options and solutions to meet customers' unique copy and printing needs.</li>
              <li>Answered phone calls to provide prompt and courteous answers to questions and encourage customer store visits.</li>
              <li>Entered customer orders in the POS register system and created invoices to collect accurate payments.</li>
              <li>Completed complex orders accurately and within the quoted time limit.</li>
              <li>Offered bindery and finishing services to enhance printing jobs and prepare polished marketing materials</li>
            </ul>
          </div>
      </div>
      <div className='mt-5 p-2'>
        <div className='text-xl text-blue-800 font-bold italic '>Education</div><br/>
        <div className='text-lg text-blue-800 font-bold italic'>
              <div className='text-black md:border-[10px] border-white'>2017-08 to 2021-11</div> 	
              <div className='md:border-[10px] border-white'>Bachelor of Science: Computer Engineering</div> 
              <div className='text-black md:border-[10px] border-white'>University of Ghana - Legon, Accra, Ghana.</div>    
           <br/> 
              <div className='text-black md:border-[10px] border-white'>2013-08 to 2016-07</div> 	
              <div className='md:border-[10px] border-white'>WASSCE: Science</div> 
              <div className='text-black md:border-[10px] border-white'>Keta Senior High Technical School - Keta, Volta, Ghana.</div>    
           </div>
      </div>
      <div className='mt-5 bg-gray-200 mr-4  p-4'>
        <div className='text-xl text-blue-800 font-bold italic '>Skills</div>
        <div>
          <ul className='list-disc list-inside'>
            <li>Flutter App Development</li>
            <li>Android Programming</li>
            <li>Next Js</li>
            <li>React Js</li>
            <li>Node Js</li>
            <li>REST API</li>
            <li>SQL</li>
            <li>Mongo DB</li>
            <li>Hardware Installation and Troubleshooting</li>
            <li>Software Installation and Troubleshooting</li>
          </ul>
        </div>
      </div>
      <div className='mt-5 p-2'>
        <div className='text-xl text-blue-800 font-bold italic '>References</div>
        <div className='md:text-lg text-blue-800 font-bold italic'>
            <div className='text-black md:border-[10px] border-white'>Mr. Atuobi</div> 	
              <div className='md:border-[10px] border-white'>Software Developers Manager(Nerasol) </div> 
              <div className='text-black md:border-[10px] border-white'>+233247888892</div>    
              <div className='text-black md:border-[10px] border-white'>Mr. Selasie</div> 	
              <div className='md:border-[10px] border-white'>Hardware Engineering Manager(UGCS)</div> 
              <div className='text-black md:border-[10px] border-white'>+233244266938</div>    
              <div className='text-black md:border-[10px] border-white'>Mr. Kennedy Sallah</div> 	
              <div className='md:border-[10px] border-white'>CEO(Kensallah Print Shop and Services)</div> 
              <div className='text-black md:border-[10px] border-white'>+233249983901</div>    
           </div>
      </div>
      <div className='mt-5 bg-gray-200 mr-4  p-4'>
        <div className='text-xl text-blue-800 font-bold italic '>Apps and Sites Built By Me</div>
        <div>
          <ul className='list-disc list-inside'>
            <li>Mola - For hostel booking around the University of Cape Coast.</li>
            <li><a href='https://sky2cfreight.vercel.app/'>https://sky2cfreight.vercel.app/</a></li>
            <li><a href='https://del-ushering.vercel.app/'>https://del-ushering.vercel.app/</a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}
