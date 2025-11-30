import { Instrument_Sans } from 'next/font/google';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import SkillsTag from '@/components/SkillsTag';

export default function Home() {
  return (
    // fix for when user is on mobile/sm screen
    <main className="mx-auto mt-[40px] max-w-[800px] grid gap-y-12 px-4">
      
      <section className="grid md:grid-cols-12 gap-12 items-start">

        <div className="col-span-5">
          <Image
            src="/placeholder.png"
            alt="Placeholder"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
          
          <div className='flex justify-between mt-5'>
            <a  
                href="https://github.com/Airplane356"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
            >
             <FaGithub className='social-icon-colour' size={25}/> 
            </a>

            <a
              href=''
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className='social-icon-colour' size={25}/>
            </a>

            <a
              href=''
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="X Twitter"
            >
              <FaXTwitter className='social-icon-colour' size={25}/>
            </a>

            <a
              href=''
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Mail"
            >
              <MdEmail className='social-icon-colour' size={25}/>
            </a>


          </div>

        </div>

        <div className="col-span-7">
          <h1 className='font-bold text-3xl'>Eric Chen</h1>
          <p className='mt-2'>IBDP @ Milliken Mills HS</p>
          <p className='mt-4'>hey 👋 my name is eric</p>
          <ul>
            <li className='list-disc ml-8'>Interested in building cool things with real-world impact 🚀</li>
            <li className='list-disc ml-8'>Not interested in bean sprouts</li>
            <li className='list-disc ml-8'>Manifesting to get into university</li>
          </ul>
        </div>
        
      </section>

      <hr></hr>

      <div className='grid grid-rows-2 gap-12'>
        <div className='flex flex-wrap border-[1px] rounded-md container'>
          <SkillsTag title={"Python"}/>
          <SkillsTag title={"Java"}/>
          <SkillsTag title={"C++"}/>
          <SkillsTag title={"JavaScript"}/>
          <SkillsTag title={"TypeScript"}/>
          <SkillsTag title={"React.js"}/>
          <SkillsTag title={"Next.js"}/>
          <SkillsTag title={"Node.js"}/>
          <SkillsTag title={"REST api"}/>
          <SkillsTag title={"MongoDB"}/>
          <SkillsTag title={"SQL"}/>
          <SkillsTag title={"NumPy"}/>
          <SkillsTag title={"Matplotlib"}/>
          <SkillsTag title={"Scikit-Learn"}/>
          <SkillsTag title={"Git"}/>

        </div>
      </div>

      <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in quam ultrices, auctor velit at, ullamcorper mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nisi nunc, imperdiet at elit ut, ornare laoreet lectus. Curabitur pretium, dolor nec elementum vehicula, felis nulla eleifend ligula, nec tincidunt leo neque a lacus. Proin condimentum dignissim bibendum. Duis dignissim ex in nisl sodales imperdiet. Vestibulum tempus orci eu condimentum tristique. Duis ultrices nisl risus, ac malesuada justo auctor quis. Nulla consequat, justo a pellentesque pellentesque, erat diam pellentesque mi, in viverra felis est id dui. Cras elit ante, molestie et urna aliquam, tincidunt rutrum nisl. Fusce eget bibendum felis. Fusce id iaculis mi. Nunc id orci suscipit, malesuada sapien id, venenatis leo. Nullam nec vestibulum nulla.

      Sed scelerisque non velit id tincidunt. Mauris vitae tempor dui. Proin auctor mi id fermentum dapibus. Fusce suscipit, dui at malesuada ornare, sapien tortor iaculis nulla, tempus ultricies metus felis ut nulla. Sed aliquet, dui non convallis vestibulum, dui elit facilisis odio, a condimentum erat velit id neque. Maecenas volutpat pulvinar libero a ultrices. Nam tempus consequat neque eget tincidunt. Morbi mauris orci, vehicula nec efficitur a, mollis id libero. Nulla placerat imperdiet posuere. Morbi nisi sapien, ullamcorper quis ligula a, mattis varius risus. Etiam imperdiet diam nisi, sed hendrerit dui scelerisque eu. Duis arcu nibh, feugiat eget iaculis eget, tincidunt sed erat.

      Suspendisse non aliquet lorem. Pellentesque convallis dui id cursus gravida. Maecenas odio mauris, gravida eu tortor vitae, scelerisque commodo enim. Vivamus tempor suscipit libero eu elementum. Donec eleifend non tellus at ultrices. Nunc mattis vulputate accumsan. Nam rutrum cursus mauris, sed molestie sapien posuere at. Fusce lobortis nisi enim, egestas tristique sem efficitur a. In ut justo vulputate eros molestie volutpat. Aliquam eu lobortis risus, sit amet consectetur enim. Aenean faucibus justo et tempor pellentesque. Etiam aliquet arcu eget aliquet efficitur. Proin porta convallis dapibus. Nam feugiat condimentum dui, eu efficitur mi elementum in. Vivamus porttitor nisi nec dolor rutrum aliquet.

      Pellentesque ultrices imperdiet orci ac euismod. Sed eleifend sem augue, sed cursus augue pellentesque ut. Nulla non lobortis lectus. Sed auctor molestie sapien, eget rhoncus sem molestie id. Integer blandit feugiat ultricies. In vestibulum consequat urna, eget congue justo porta sit amet. Ut a lacinia purus, luctus cursus ante. Mauris dapibus tincidunt convallis.

      Praesent at lectus eleifend, ullamcorper mi a, volutpat ante. In sit amet bibendum enim, eget ullamcorper augue. Aenean elementum, felis nec imperdiet dictum, metus orci lacinia tellus, eu vulputate ex diam quis nisl. Etiam ut rutrum felis. Mauris dictum auctor nulla vitae rhoncus. Aliquam ullamcorper, eros sit amet malesuada elementum, massa leo placerat felis, sed luctus leo metus aliquet enim. Suspendisse potenti. Ut condimentum ut ipsum id condimentum. Integer iaculis dolor eget ligula rutrum accumsan.

      </p>


    </main>
  );
}
