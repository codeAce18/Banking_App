import { card } from '../assets';

import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Unlock superior card benefits with ease – discover a better deal in just a few simple steps, tailored to meet your financial needs and elevate your card experience.</p>

      <Button styles='mt-10' />
    </div>

    <div className={`${layout.sectionImg}`}>
      <img src={card} alt='card_img' className='w-[100%] h-[100%]'/>
    </div>

  </section>
)


export default CardDeal