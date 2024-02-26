import Head from 'next/head'
import Image from 'next/image'
import prof from '../public/prof.jpg';
import {FaStar, FaUsers} from 'react-icons/fa'
import {FcSupport, FcIdea, FcMindMap} from 'react-icons/fc'
import {HiAcademicCap} from 'react-icons/hi'
import {ImLocation, ImPhone, ImWhatsapp, ImMail2, ImGit} from 'react-icons/im'

export default function Home() {
  return (
    <>
    <Head>
      <title>Isotope's CV</title>
    </Head>
    <div className='w-[100vw] md:mr-6 mb-4 p-6 bg-white mx-auto text-black bg-gray-100'>
      <div className='w-[70vw] justify-between flex'>
        <div className='text-3xl text-blue-800 font-bold italic uppercase'>
          <div  className='text-3xl text-blue-800 font-bold italic uppercase font-mono'>Israel Gayina</div>
          <div className='text-lg text-blue-800 font-bold italic font-mono'>
            Computer Engineer | Software Developer
          </div>
        </div>
        <div> 
            <Image src={prof} alt="Profile Image" className="absolute w-[15vw] md:w-[10vw] rounded-3xl shadow-lg hover:w-[25vw]"/>
          </div>
      </div>
      <div className='md:text-sm italic'>
        <table>
          <tr>
            <td className='text-blue-800 font-bold pr-2 flex'><ImLocation color="red"/>Address:</td>
            <td>VK-0289-0336, Keta, Volta, Ghana.</td>
          </tr>
          <tr>
            <td className='text-blue-800 font-bold pr-2 flex'><ImPhone color="black"/>Phone:</td>
            <td>+233594891672</td>
          </tr>
          <tr>
            <td className='text-blue-800 font-bold pr-2 flex'><ImMail2 color="gray"/>E-mail:</td>
            <td>israelgayina606@gmail.com | isotopegayina606@gmail.com</td>
          </tr>
          <tr>
            <td className='text-blue-800 font-bold pr-2 flex'><ImGit color="indigo"/>Github Porfolio:</td>
            <td><a href='https://github.com/IsotopeAlpha'>https://github.com/IsotopeAlpha</a></td>
          </tr>
          <tr>
            <td className='text-blue-800 font-bold pr-2 flex'><ImGit color="indigo"/>Gitlab Porfolio:</td>
            <td><a href='https://gitlab.com/IsotopeAlpha'>https://gitlab.com/IsotopeAlpha</a></td>
          </tr>
          <tr>
            <td className='text-blue-800 font-bold pr-2 flex'><ImGit color="indigo"/>LinkedIn Porfolio:</td>
            <td><a href='https://www.linkedin.com/in/israel-gayina-a90085226'>https://www.linkedin.com/in/israel-gayina-a90085226</a></td>
          </tr>
        </table>
        </div>
      <br />
      <div data-aos="fade-up" data-aos-duration="3000" className='md:w-[80vw] hover: w-[90vw] md:ml-[8vw] md:h-full h-[50vh] overflow-auto bg-white p-5 rounded shadow-md'>
        <div className='text-xl text-blue-800 font-bold italic font-mono uppercase mb-4'><FcIdea/> Overview</div>
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
      <div data-aos="fade-right" data-aos-duration="2000" className='bg-gray-200 mt-5 p-3 border-rounded md:mr-4 rounded'>
        <div className='text-xl text-blue-800 font-bold italic font-mono uppercase flex'>Work History<FcSupport color="yellow"/></div>
          <div className='md:text-lg text-blue-800 font-bold italic md:flex mt-4'>
              <div className='text-black  md:border-[10px]'>2023-04 to Current </div> 	
              <div className='md:border-[10px]'>Lab Technician & Software Developer</div> 
              <div className='text-black md:border-[10px]'>Footprint Internationa School, Aflao, Volta, Ghana.</div>    
           </div>
          <div>
            <ul className='list-disc list-inside'>
              <li>Support computer lab operations.Collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development.</li>
              <li>Support faculty and students to use computer software and hardware.</li>
              <li>Present on software packages and applications and develop lab templates.</li>
              <li>Respond to queries and introduce students to use of computers and peripheral equipment.</li>
              <li>Manage laboratory software, test materials and hardware to ensure security.</li>
              <li>Handle lab equipment to clean keyboards, monitors and disk drives.</li>
              <li>Ensure proper treatment and authorized removal of equipment.</li>
              <li>Log equipment damage and malfunctions.</li>
              <li>Extend assistance towards computers and other peripherals support condition.</li>
              <li>Create and maintain school website.</li>
              <li>Create and maintain other applications needed by the school. </li>
            </ul>
          </div>
          <div className='md:text-lg text-blue-800 font-bold italic md:flex mt-4'>
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
        <div className='text-xl text-blue-800 font-bold italic font-mono uppercase flex'><HiAcademicCap color="red"/> Education</div>
        <div className='text-md font-bold italic'>
              <div className='mt-4'>2017-08 to 2021-11</div> 	
              <div className='text-blue-800'>Bachelor of Science: Computer Engineering</div> 
              <div>University of Ghana - Legon, Accra, Ghana.</div>   
              <div className='mt-4'>2013-08 to 2016-07</div> 	
              <div className='text-blue-800'>WASSCE: Science</div> 
              <div>Keta Senior High Technical School - Keta, Volta, Ghana.</div>   
           </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="2000" className='mt-5 bg-white mr-4  p-4 rounded shadow-md'>
        <div className='text-xl text-blue-800 font-bold italic font-mono uppercase flex'><FaStar color="gold"/> Skills<FaStar color="gold"/> </div>
        <div>
          <ul className='list-disc list-inside'>
            <li>Flutter App Development</li>
            <li>Android Programming</li>
            <li>Next Js</li>
            <li>React Js</li>
            <li>Node Js</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>SQL</li>
            <li>Mongo DB</li>
            <li>MVC, MVP and MVVM Design Patterns</li>
            <li>REST API Development</li>
            <li>Hardware Installation and Troubleshooting</li>
            <li>Software Installation and Troubleshooting</li>
          </ul>
        </div>
      </div>
      <div className='mt-5 p-2'>
        <div className='text-xl text-blue-800 font-bold italic font-mono uppercase flex'><FaUsers color="gray"/> References</div>
        <div className='md:text-md font-bold italic'>
            <div className='mt-4'>Mr. Atuobi</div> 	
              <div className='text-blue-800'>Software Developers Manager(Nerasol) </div> 
              <div>+233247888892</div>    
              <div className='mt-4'>Mr. Selasie</div> 	
              <div className='text-blue-800'>Hardware Engineering Manager(UGCS)</div> 
              <div>+233244266938</div>    
              <div className='mt-4'>Mr. Kennedy Sallah</div> 	
              <div className='text-blue-800'>CEO(Kensallah Print Shop and Services)</div> 
              <div>+233249983901</div>    
           </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="3000" className='mt-5 bg-gray-200 mr-4  p-4 shadow-lg'>
        <div className='text-xl text-blue-800 font-bold italic font-mono uppercase flex'><FcMindMap/> Apps and Sites Built By Me</div>
        <div>
          <ul className='list-disc list-inside'>
            <li><a href='https://isotope-cv.vercel.app/'>My Website</a></li>
            <li><a href='https://mola-estate-agency-admin-b05ikn5ec-isotopealpha.vercel.app/'>Mola App Admin Site</a></li>
            <li><a href='https://footprintschool.vercel.app/'>Footprint International School Website</a></li>
            <li><a href='https://sky2cfreight.vercel.app/'>https://sky2cfreight.vercel.app/</a></li>
            <li><a href='https://del-ushering.vercel.app/'>https://del-ushering.vercel.app/</a></li>
            <li><a href='https://play.google.com/store/apps/details?id=com.iso.mola_app'>Mola App - For hostel booking around the University of Cape Coast.</a></li>
            <li><a href='https://play.google.com/store/apps/details?id=com.mola.hostel_manager_mobile'>Mola Hostel Manager App</a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}
