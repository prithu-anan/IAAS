import { motion } from "framer-motion";

const IAASInfo = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-green-200 to-green-400 min-h-screen flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="mx-auto bg-white p-8 rounded-lg shadow-lg border border-green-300 relative"
      >
        <img 
          src="/src/assets/IAAS.png" 
          alt="IAAS Banner" 
          className="w-48 h-48 object-cover rounded-md mb-4 justify-self-center"
        />
        
        <motion.h1 
          className="text-3xl font-bold text-green-900 text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2 }}
        >
          IAAS - International Association of Students in Agricultural and Related Sciences
        </motion.h1>
        
        <p className="mt-4 text-gray-800 leading-relaxed">
          IAAS is a global, non-profit organization focused on agriculture and related sciences. It collaborates with students, researchers, and farmers to enhance agricultural education and practices worldwide.
        </p>

        <motion.h2 className="text-2xl font-semibold text-green-800 mt-6 border-b-2 border-green-600 pb-1">
          Structure
        </motion.h2>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>IAAS has 5 regional committees and 50 national committees.</li>
          <li>IAAS Asia Pacific joined IAAS World in 1992 via IAAS Indonesia.</li>
          <li>Currently, 6 Asian countries are members of IAAS.</li>
        </ul>

        <motion.h2 className="text-2xl font-semibold text-green-800 mt-6 border-b-2 border-green-600 pb-1">
          IAAS Bangladesh
        </motion.h2>
        <p className="text-gray-800">IAAS Bangladesh consists of 16 Local Committees from Agricultural and Related Science Universities, including:</p>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>KU, PSTU, MBSTU, JUST, HSTU</li>
          <li>SAU, SAU-Dhaka, RU, IU, BAU</li>
          <li>BSMRSTU, KAU</li>
        </ul>

        <motion.h2 className="text-2xl font-semibold text-green-800 mt-6 border-b-2 border-green-600 pb-1">
          Organizational Structure
        </motion.h2>
        <p className="text-gray-800">Each committee has two departments:</p>
        <ul className="list-disc list-inside text-gray-800">
          <li><strong>Executive Board</strong> - Takes prime decisions.</li>
          <li><strong>Quality Board</strong> - Works under the supervision of the Executive Board.</li>
        </ul>

        <motion.h3 className="text-xl font-semibold text-green-700 mt-4">
          Executive Board Positions
        </motion.h3>
        <ul className="list-disc list-inside text-gray-800">
          <li>National Director</li>
          <li>VD of Exchange</li>
          <li>VD of External Relations</li>
          <li>VD of Finance</li>
          <li>VD of Communication</li>
        </ul>

        <motion.h3 className="text-xl font-semibold text-green-700 mt-4">
          Control Board Positions
        </motion.h3>
        <ul className="list-disc list-inside text-gray-800">
          <li>Head of Control Board</li>
          <li>Membership Officer</li>
          <li>Research and Program Development Officer</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default IAASInfo;
