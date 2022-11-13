import OptionCard from '../pages/Admin/components/OptionCard'
import './ViewMenuAdmin.css'

interface Option {
  option: string
  text: string
}
const options: Option[] = [
  {
    option: 'equipments',
    text: 'Equipamientos'
  },
  {
    option: 'users',
    text: 'Usuarios'
  },
  {
    option: 'products',
    text: 'Productos'
  },
  {
    option: 'types',
    text: 'Tipos'
  },
  {
    option: 'categories',
    text: 'Categorías'
  },
  {
    option: 'locations',
    text: 'Localizaciones'
  }
]

const ViewMenuAdmin: React.FC = () => {
  return (
    <>
      <div className="options-container">
        {options.map((option, index) => (
          <OptionCard option={option.option} index={index} text={option.text} />
        ))}
      </div>
    </>
  )
}

export default ViewMenuAdmin