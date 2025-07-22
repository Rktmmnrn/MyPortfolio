import skillsData from './component/SkillsData'
import { motion } from 'framer-motion'

const skills = () => {
    return (
        <>
            <motion.h2    
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            >
            Skills & Projects
            </motion.h2>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 2xl:grid-cols-3">
                {skillsData.map((section, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-4 items-center justify-center rounded-xl shadow-lg"
                >
                    <h3 className="flex items-center gap-2 text-xl font-semibold capitalize">
                        <span className="w-7 h-7 flex items-center justify-center">{section.icon}</span>{section.title}
                    </h3>
                    <div className='w-full border'>
                        Here is the projects
                    </div>
                    <div className="overflow-hidden flex w-full">
                        <div className={index === 0? 'auto-scroll': 'auto'}>
                            {section.items?.map((item, j) => (
                                <div key={j} className='flex flex-col items-center relative justify-center w-[80px] h-[70px] group overflow-hidden'>
                                    <img key={item.name} src={item.icon} alt={item.name} className="w-12 h-12 object-contain Skills-div-img group-hover:translate-y-[-4px]" title={item.name} />
                                    <p className='font-light transition-transform translate-y-full duration-300 group-hover:translate-y-0  group-hover:flex'>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                ))}
            </div>
        </>
    )
}

export default skills;