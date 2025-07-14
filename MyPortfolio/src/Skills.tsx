import Vector from './component/vector' // svg component
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
                    className="grid grid-cols-1 gap-4 items-center justify-center rounded-xl py-4 shadow-lg"
                >
                    <h3 className="flex items-center gap-2 text-xl font-semibold capitalize">
                        <span className="w-7 h-7 flex items-center justify-center">{section.icon}</span>                        {section.title}
                    </h3>

                    {section.categories && section.categories.length > 0 ? (
                        section.categories?.map((category, i) => (
                        <div key={i} className="col-span-1 flex-col flex items-center gap-2 justify-start h-full">
                            <h4 className="font-medium text-md capitalize">{category.name}</h4>
                            <div className="w-full overflow-x-hidden"> {/* Div web */}
                                <div className='auto-scroll'>
                                    {category.items.map((item, j) => (
                                    <div key={j} className="flex flex-col items-center relative justify-center group w-[70px] h-[70px] overflow-hidden">
                                        <img key={item.name} src={item.icon} alt={item.name} className="w-12 h-12 object-contain Skills-div-img group-hover:translate-y-[-2px]" title={item.name}/>
                                        <p className='Skills-div-name translate-y-5 transition-transform duration-300 group-hover:translate-y-0 group-hover:flex'>{item.name}</p>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                        ))
                    ) : (
                    <div className="grid grid-cols-3 gap-4 col-span-2">
                        {section.items?.map((item, j) => (
                            <div key={j} className='flex flex-col items-center relative justify-center h-[80px] group overflow-hidden'>
                                <img key={item.name} src={item.icon} alt={item.name} className="w-12 h-12 object-contain Skills-div-img group-hover:translate-y-[-4px]" title={item.name} />
                                <p className='Skills-div-name transition-transform translate-y-6 duration-300 group-hover:translate-y-0  group-hover:flex'>{item.name}</p>
                            </div>
                        ))}
                    </div>
                    )}
                </motion.div>
                ))}
            </div>
        </>
    )
}

export default skills;