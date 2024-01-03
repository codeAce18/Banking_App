import { clients } from "../constants"
import style from '../style';

const Clients = () =>  (

  <section className={`${style.flexCenter} my-4`}>
    <div className={`${style.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${style.flexCenter} min-w-[192px] `}>
          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain mt-[50px]" />
        </div>
      ))}
    </div>
  </section>
)

export default Clients