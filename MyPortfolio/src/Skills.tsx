import Vector from './component/vector' // svg component
import skillsData from './component/SkillsData'
import { motion } from 'framer-motion'

const skills = () => {
    return (
        <>
            <h2 className="font-bold text-4xl mb-8 text-center">Skills & Projects</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {skillsData.map((section, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    viewport={{ once: false }}
                    className="grid grid-cols-2 gap-4 items-center justify-center bg-white rounded-xl py-4"
                >
                    <h3 className="flex items-center gap-2 text-xl font-semibold capitalize col-span-2">
                        <Vector nameVector={section.icon} style={{ width: '28px', height: '28px' }} />
                        {section.title}
                    </h3>
                    {section.categories && section.categories.length > 0 ? (
                        section.categories?.map((category, i) => (
                        <div key={i} className="col-span-1 flex-col flex items-center gap-2">
                            <h4 className="font-medium text-md capitalize">{category.name}</h4>
                            <div className="grid grid-cols-3 items-center gap-y-2">
                            {category.items.map((item, j) => (
                                <div key={j} className="flex flex-col items-center relative justify-center group w-[73px] h-[70px] overflow-hidden">
                                    <img key={item.name} src={item.icon} alt={item.name} className="w-12 h-12 object-contain Skills-div-img group-hover:translate-y-[-2px]" title={item.name} />
                                    <p className='Skills-div-name translate-y-5 transition-transform duration-300 group-hover:translate-y-0 group-hover:flex'>{item.name}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                        ))
                    ) : (
                    <div className="grid grid-cols-3 gap-4 col-span-2">
                        {section.items?.map((item, j) => (
                            <div key={j} className='flex flex-col items-center relative justify-center group overflow-hidden'>
                                <img key={item.name} src={item.icon} alt={item.name} className="w-12 h-12 object-contain Skills-div-img group-hover:translate-y-[-4px]" title={item.name} />
                                <p className='Skills-div-name transition-transform translate-y-5 duration-300 group-hover:translate-y-0  group-hover:flex'>{item.name}</p>
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