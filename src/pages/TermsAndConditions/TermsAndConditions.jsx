import Header from 'components/Header/Header';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import css from './TermsAndConditions.module.css';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className={css.termsSection}>
        <div className={css.termsWrapper}>
          <div className={css.termsNavigate}>
            <NavLink className={css.termsHomeLink} to="/">
              Home
            </NavLink>
            <svg className={css.dotSvg} width="4" height="4">
              <use href={sprite + '#icon-dot-gradient'} />
            </svg>
            <p className={css.termsTitle}>Terms & Conditions</p>
          </div>
          <h1 className={css.termsHeader}>Terms & Conditions</h1>
          <div className={css.updaterBlock}>
            <p className={css.updaterData}>
              <span className={css.updaterText}>Last update: </span>August 10,
              2023
            </p>
          </div>

          <p className={css.termsText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur expedita iure officiis repellat error eveniet deleniti
            dolorum pariatur nisi blanditiis exercitationem sapiente, itaque ad
            optio quibusdam quis sequi voluptas magnam architecto nesciunt amet?
            Consequatur non nihil recusandae odit reprehenderit, ad amet
            voluptate tempore. Officiis ducimus repellendus nihil. Accusamus
            quas recusandae distinctio aliquid nihil tenetur eligendi ipsam
            alias quaerat! Ipsum a minus incidunt animi dolor alias consequuntur
            rem quia illo voluptatum commodi officiis placeat numquam, nam,
            totam debitis exercitationem doloremque labore architecto aliquid
            praesentium. Quas est perferendis dignissimos quibusdam! Dicta
            voluptas fuga, cumque qui amet asperiores iste enim! Dicta quibusdam
            eius debitis magnam quis necessitatibus cum non rerum sed explicabo?
            Et quam, voluptatem voluptates eos vel eum quibusdam illo asperiores
            ullam qui voluptas vitae placeat eaque molestiae in ea error?
            Pariatur alias reprehenderit aperiam. Quia, nostrum adipisci dolor
            consequatur at nulla quaerat eligendi asperiores in blanditiis nisi
            earum soluta harum, sint itaque. Quo sint expedita, quasi unde iusto
            amet non aliquam autem aliquid vitae! Quidem assumenda laboriosam
            officia ut, recusandae molestias nobis autem incidunt ab est omnis
            maxime minus, pariatur cum! Odit praesentium minima at, tempora
            quaerat obcaecati amet, ipsum qui maxime dignissimos ex sint itaque
            vel inventore aspernatur earum accusantium soluta tenetur? Aliquam
            nostrum nulla, aut ut labore tenetur quam, debitis, totam quo
            temporibus veniam recusandae rerum. Tenetur cum pariatur, impedit,
            eaque mollitia nesciunt iusto molestias voluptates, distinctio nihil
            perspiciatis magni debitis quam similique? Quisquam qui, deserunt
            iure vero doloremque sit unde, rerum illum dignissimos
            necessitatibus asperiores numquam fugiat pariatur quos ex recusandae
            sed deleniti tempora eius autem corrupti iusto, architecto laborum
            rem. Accusamus corporis impedit fugit itaque, aliquid voluptatem
            libero ratione? Totam eius molestias, quo vero sint accusantium
            deserunt, placeat ad perferendis blanditiis qui consequatur aperiam
            quas odit reprehenderit excepturi? Magni error enim excepturi
            eligendi non, laborum illum corporis eum nam laboriosam cumque iure
            quaerat ipsum labore deleniti recusandae? Neque labore, impedit
            suscipit architecto mollitia, aliquam, blanditiis sunt voluptatem
            eius magni a quae dignissimos adipisci accusamus voluptatibus
            eveniet minus quos fugit. Excepturi, doloremque vitae, vero beatae
            fugit reiciendis porro provident temporibus odio vel in magni! Sequi
            cumque adipisci, incidunt, veritatis fugiat corrupti in ab ipsum
            voluptatem, at amet. Alias dolore doloribus reiciendis nobis! Vel
            dignissimos sit inventore perferendis, accusantium, ipsa earum
            eveniet cupiditate doloribus, nam neque amet veritatis. Mollitia,
            expedita autem! Aliquam magnam quo aperiam enim sunt ipsa quasi,
            iure saepe corrupti architecto? Possimus voluptate rem perferendis
            ipsam quo. Deserunt eum incidunt iusto ipsa a ullam, recusandae
            tempore id repellat, ex explicabo voluptas quas aspernatur natus
            molestias. Laudantium, sed nisi magnam quibusdam ipsa modi itaque
            aliquid eligendi obcaecati tenetur corporis voluptatibus iure a
            dignissimos architecto voluptas vitae! Nisi dolorum repudiandae
            labore sapiente eos quo atque ea unde. Dolores expedita ipsum
            mollitia aliquam quasi molestias laudantium commodi delectus omnis
            itaque tenetur magnam beatae quisquam est aut earum, vero hic, ex
            cupiditate nostrum alias quod dicta id numquam. Odio inventore
            tenetur, maxime impedit velit nobis quibusdam corporis temporibus,
            enim quo quisquam numquam id fugit debitis eaque qui. Itaque ut
            officia odit!
          </p>
          <p className={css.termsText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque rem,
            illo ullam eius assumenda aspernatur doloremque iure, nam facilis
            maiores voluptatibus tempora non tenetur fugiat? Architecto nisi ex
            inventore quo ut impedit, necessitatibus in reiciendis ipsum dicta
            eaque numquam cumque quae tenetur quibusdam eveniet voluptas cum
            accusamus nesciunt, vel ipsa soluta blanditiis? Modi, sequi.
            Reiciendis ducimus aliquam delectus eaque rem. Recusandae,
            necessitatibus nobis adipisci repudiandae illo a voluptatibus nemo
            magnam alias omnis numquam ratione nihil corporis voluptatem vero
            est expedita, reiciendis similique. Magnam repellat iure quibusdam
            et cumque deserunt? Id aliquam iusto omnis vel dolorem quisquam cum
            minima molestiae sint, inventore modi doloremque consequatur
            perspiciatis, eos eveniet tempore expedita! Amet voluptatibus earum
            dolores optio tenetur dolor modi ipsum in molestiae. Repellat
            suscipit nihil molestias rerum similique qui accusantium enim
            sapiente, ad veritatis maiores voluptatibus illo fuga temporibus,
            voluptates perferendis autem laborum eum, a id est! Corrupti
            laborum, ducimus debitis vero neque totam eius ipsum quidem nam ipsa
            nesciunt dolores repellendus possimus esse consequatur similique
            quas corporis eos error incidunt nemo saepe quam distinctio! Rem,
            porro! Nostrum perferendis adipisci suscipit minus animi fugit,
            provident tempore facilis modi voluptate. Consectetur corporis, odio
            quos minima, fugit reprehenderit ab explicabo maxime soluta iusto
            accusantium placeat nemo. Doloremque odio fugiat ipsum consequuntur
            eligendi similique repellat vel magnam corrupti, inventore saepe
            assumenda laboriosam nemo deleniti dolorem, excepturi, neque
            consequatur. Odit architecto dicta sunt animi quasi rem minima qui
            tempore quos? Architecto rem expedita, sunt quas excepturi quidem
            corrupti iure minus quia voluptatum dolores libero aperiam itaque
            animi sit tempora quae recusandae molestias, id vero dolorem.
            Architecto consequuntur, recusandae deserunt delectus voluptate
            velit dolor commodi aut natus rerum molestiae. Laudantium ex, illo
            perferendis ad molestias voluptatum reiciendis modi quia eligendi
            iusto ut mollitia dicta architecto quo itaque accusantium nostrum.
            Est numquam atque expedita in non alias tempore?
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
