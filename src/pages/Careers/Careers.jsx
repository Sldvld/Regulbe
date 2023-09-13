import Header from 'components/Header/Header';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import css from './Careers.module.css';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={<>{header}</>}
      className={css.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${css.itemBtn} ${isEnter && css.itemBtnExpanded}`,
      }}
      contentProps={{ className: css.itemContent }}
      panelProps={{ className: css.itemPanel }}
    />
  );

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
            <p className={css.termsTitle}>Careers</p>
          </div>
          <h1 className={css.termsHeader}>Careers</h1>
          <div className={css.updaterBlock}>
            <p className={css.updaterData}>
              <span className={css.updaterText}>Last update: </span>15
              September, 2023
            </p>
          </div>
          <h2 className={css.secondaryHeaders}>
            Join Our Team: Where Talent Thrives
          </h2>
          <p className={css.termsText}>
            At Regulbe, we believe that success is built upon the foundation of
            exceptional talent. We are committed to nurturing a culture of
            continuous growth and innovation, and we are always on the lookout
            for exceptional individuals to join our team.
          </p>
          <h2 className={css.secondaryHeaders}>Why Regulbe?</h2>
          <p className={css.termsText}>
            <span className={css.termsAccent}>A Culture of Excellence: </span>
            We pride ourselves on fostering a collaborative and inclusive work
            environment that encourages creativity, learning, and professional
            development. Our team members are empowered to take ownership of
            their work, and we believe in celebrating the diverse strengths and
            perspectives that each individual brings.
          </p>
          <p className={css.termsText}>
            <span className={css.termsAccent}>Cutting-Edge Innovation: </span>
            Joining our team means being part of a journey that constantly
            pushes the boundaries of what's possible. We believe that your
            contributions will shape the future of cloud communications.
          </p>
          <p className={css.termsText}>
            <span className={css.termsAccent}>Impactful Work: </span>
            At Regulbe, every project and initiative you work on will make a
            real difference. We tackle meaningful challenges and strive to
            create solutions that positively impact our clients and the
            communities we serve.
          </p>
          <p className={css.termsText}>
            <span className={css.termsAccent}>Professional Growth: </span>
            We are committed to investing in your growth and development. From
            mentorship programs to ongoing training, we provide the resources
            you need to excel in your career and achieve your ambitions.
          </p>
          <p className={css.termsText}>
            <span className={css.termsAccent}>Joining a Family: </span>
            When you join Regulbe, you become part of a close-knit family that
            values collaboration, mutual support, and a shared vision. We
            celebrate our successes together and navigate challenges as a
            unified team.
          </p>
          <h2 className={css.secondaryHeaders}>Vacancies: </h2>
          <Accordion allowMultiple transition transitionTimeout={250}>
            <AccordionItem
              className={css.secondaryHeaders}
              header="Junior Regulatory Analyst - Cloud Communications/ Telecommunications (Remote)"
            >
              <p className={css.termsText}>
                Regulbe is a young, but dynamic and forward-thinking company at
                the forefront of cloud communications regulation. We are
                dedicated to shaping the future of the industry through a deep
                understanding of regulatory frameworks and best-in-class
                regulatory compliance services. As we continue to expand our
                reach, we are seeking a talented and motivated Junior Regulatory
                Analyst to join our team.
              </p>
              <h2 className={css.secondaryHeaders}>Position Overview:</h2>
              <p className={css.termsText}>
                As a Junior Regulatory Analyst at Regulbe, you will play a
                pivotal role in researching and analyzing complex regulatory
                issues within the cloud communications and telecommunications
                sector. This role offers an exciting opportunity for individuals
                with 0 to 2 years of experience in telecommunications who are
                eager to enhance their research and writing capabilities and
                learn more about regulatory compliance. Candidates with
                exceptional English and additional language skills will have a
                distinct advantage.
              </p>
              <h2 className={css.secondaryHeaders}>Responsibilities:</h2>
              <ul>
                <li className={css.careersList}>
                  Conduct thorough research on regulatory policies, industry
                  trends, and legal frameworks related to cloud communications
                  and telecommunications
                </li>
                <li className={css.careersList}>
                  Draft well-researched reports and briefs that communicate
                  complex regulatory concepts clearly and effectively
                </li>
                <li className={css.careersList}>
                  Assist in the preparation of regulatory submissions, responses
                  to consultations, and other relevant documents
                </li>
                <li className={css.careersList}>
                  Stay updated with evolving regulatory developments and
                  contribute to the development of strategies to ensure
                  compliance and business growth
                </li>
                <li className={css.careersList}>
                  Support senior team members in meetings, presentations, and
                  communication with clients
                </li>
              </ul>
              <h2 className={css.secondaryHeaders}>Qualifications:</h2>
              <ul>
                <li className={css.careersList}>
                  Bachelor's degree in Law, Economics, Public Policy,
                  Telecommunications, or a related field
                </li>
                <li className={css.careersList}>
                  0 to 2 years of professional experience in the
                  telecommunications sector, with a keen interest in cloud
                  communications and regulatory compliance
                </li>
                <li className={css.careersList}>
                  Exceptional written and verbal communication skills in
                  English; proficiency in other languages is a plus
                </li>
                <li className={css.careersList}>
                  Strong analytical mindset with meticulous attention to detail
                </li>
                <li className={css.careersList}>
                  Eagerness to learn and adapt in a fast-paced and ever-changing
                  regulatory landscape
                </li>
                <li className={css.careersList}>
                  Ability to work independently and collaboratively within a
                  team environment
                </li>
                <li className={css.careersList}>
                  Excellent organizational and time management skills, with the
                  ability to meet deadlines
                </li>
                <li className={css.careersList}>
                  Willingness to take on additional responsibilities, ask
                  questions, and challenge the status quo
                </li>
              </ul>
              <h2 className={css.secondaryHeaders}>Why Join Regulbe?</h2>
              <ul>
                <li className={css.careersList}>
                  Professional Growth: You will have the opportunity to develop
                  a comprehensive understanding of cloud communications and
                  telecommunications regulation, setting the foundation for a
                  rewarding career path
                </li>
                <li className={css.careersList}>
                  Impactful Work: Your contributions will directly shape the
                  future of our services
                </li>
                <li className={css.careersList}>
                  Collaborative Environment: Join a team of experts who value
                  collaboration, innovation, and knowledge sharing
                </li>
                <li className={css.careersList}>
                  Personal Development: Enhance your research and writing skills
                  through hands-on experience and mentorship
                </li>
                <li className={css.careersList}>
                  Diverse Culture: Engage with a multicultural team and gain
                  exposure to international regulatory dynamics
                </li>
                <li className={css.careersList}>
                  Flexible working hours: at Regulbe, we believe that people
                  should have the freedom to choose the most suitable times for
                  completing their tasks. We understand the importance of
                  maintaining a work-life balance, allowing our team members to
                  care for their families and pursue their personal interests
                  while developing exceptional results
                </li>
                <li className={css.careersList}>
                  Competitive Compensation: We offer a competitive salary and
                  benefits package
                </li>
              </ul>
              <p className={css.termsText}>
                At Regulbe, we don't necessarily require your profile to
                perfectly match our job description. If you believe you have the
                capacity to take on the described role, we encourage you to a
              </p>
              <p className={css.termsText}>
                Regulbe is an equal opportunity employer. We encourage
                applications from individuals of all backgrounds and
                experiences.
              </p>
              <p className={css.termsText}>
                To apply or inquire further, please contact us at
                <a href="mailto: info@regulbe.com" className={css.termsAccent}>
                  {' '}
                  info@regulbe.com
                </a>
              </p>
              <p className={css.termsText}>
                Join Regulbe and embark on a journey to shape the future of
                cloud communications and telecommunications regulation!
              </p>
            </AccordionItem>

            <AccordionItem header="Regulatory Compliance Manager - Cloud Communications (Remote)">
              <p className={css.termsText}>
                Regulbe is a young, but dynamic and forward-thinking company at
                the forefront of cloud communications regulation. We are
                dedicated to shaping the future of the industry through a deep
                understanding of regulatory frameworks and best-in-class
                regulatory compliance services. As we continue to expand our
                reach, we are seeking an experienced Regulatory Compliance
                Manager to join our team. This role offers a unique opportunity
                for individuals with a strong background in telecommunications
                regulatory compliance to lead the development of new service
                offerings, sharing experience with less experienced colleagues
                and cooperating with clients.
              </p>
              <h2 className={css.secondaryHeaders}>Position Overview:</h2>
              <p className={css.termsText}>
                As a Regulatory Compliance Manager at Regulbe, you will take a
                leadership role in developing our regulatory compliance service
                offerings. With a minimum of 8 years of professional experience,
                you will bring your comprehensive expertise to navigate complex
                compliance matters. This position is ideal for lawyers or
                regulatory professionals who are eager to contribute their
                professional understanding of the cloud communications business
                while developing the Regulbe service offerings and fostering the
                growth of the team.
              </p>
              <h2 className={css.secondaryHeaders}>Responsibilities:</h2>
              <ul>
                <li className={css.careersList}>
                  Conduct thorough research on regulatory policies, industry
                  trends, and legal frameworks related to cloud communications
                  and telecommunications
                </li>
                <li className={css.careersList}>
                  Lead and manage the regulatory compliance research and
                  analysis
                </li>
                <li className={css.careersList}>
                  Stay up-to-date with evolving regulatory requirements and
                  effectively communicate changes to internal stakeholders
                </li>
                <li className={css.careersList}>
                  Develop and implement compliance programs, policies, and
                  processes
                </li>
                <li className={css.careersList}>
                  Oversee the creation of compliance documentation, reports, and
                  submissions to regulatory authorities
                </li>
                <li className={css.careersList}>
                  Mentor and provide guidance to junior team members, fostering
                  a culture of continuous learning and professional development
                </li>
                <li className={css.careersList}>
                  Lead the development of new service offerings
                </li>
                <li className={css.careersList}>
                  Liaise with legal and regulatory authorities
                </li>
              </ul>
              <h2 className={css.secondaryHeaders}>Qualifications:</h2>
              <ul>
                <li className={css.careersList}>
                  Bachelor’s degree in Law, Business, Telecommunications or a
                  related field. Advanced degree is a plus
                </li>
                <li className={css.careersList}>
                  A minimum of 8 years of professional working experience in
                  cloud communications and/or telecommunications regulatory
                  compliance
                </li>
                <li className={css.careersList}>
                  Exceptional understanding of the telecommunications business
                  and cloud communications services
                </li>
                <li className={css.careersList}>
                  Strong English language skills, both written and verbal, are
                  essential; proficiency in other European languages is a plus
                </li>
                <li className={css.careersList}>
                  Proven track record in successfully managing complex
                  regulatory compliance initiatives
                </li>
                <li className={css.careersList}>
                  Leadership experience, with the ability to mentor and guide
                  colleagues effectively
                </li>
                <li className={css.careersList}>
                  Exceptional problem-solving and analytical skills to address
                  intricate compliance challenges
                </li>
                <li className={css.careersList}>
                  Excellent organizational and project management capabilities
                </li>
                <li className={css.careersList}>
                  Ability to collaborate and communicate effectively across
                  various levels
                </li>
                <li className={css.careersList}>
                  Demonstrated adaptability in navigating a fast-paced, evolving
                  regulatory environment
                </li>
                <li className={css.careersList}>
                  Willingness to take on additional responsibilities, ask &
                  answer questions, and challenge the status quo
                </li>
              </ul>
              <p className={css.termsText}>
                At Regulbe, we don't necessarily require your profile to
                perfectly match our job description. If you believe you have the
                capacity to take on the described role, we encourage you to
                apply!
              </p>
              <h2 className={css.secondaryHeaders}>Why Join Regulbe?</h2>
              <ul>
                <li className={css.careersList}>
                  Leadership Opportunity: Lead the development of new service
                  offering and guide colleagues in their professional growth
                </li>
                <li className={css.careersList}>
                  Collaborative Environment: Join a team of experts who value
                  collaboration, innovation, and knowledge sharing
                </li>
                <li className={css.careersList}>
                  Professional Growth: Enhance your leadership and regulatory
                  compliance skills through hands-on experience and mentorship
                </li>
                <li className={css.careersList}>
                  Impactful Work: Your contributions will directly shape the
                  future of our services
                </li>
                <li className={css.careersList}>
                  Diverse Culture: Engage with a multicultural team and gain
                  exposure to international regulatory dynamics
                </li>
                <li className={css.careersList}>
                  Flexible working hours: at Regulbe, we believe that people
                  should have the freedom to choose the most suitable times for
                  completing their tasks. We understand the importance of
                  maintaining a work-life balance, allowing our team members to
                  care for their families and pursue their personal interests
                  while developing exceptional results
                </li>
                <li className={css.careersList}>
                  Competitive Compensation: We offer a competitive salary and
                  benefits package
                </li>
              </ul>
            </AccordionItem>
          </Accordion>
          <p className={css.termsText}>
            At Regulbe, we don't necessarily require your profile to perfectly
            match our job description. If you believe you have the capacity to
            take on the described role, we encourage you to apply!
          </p>
          <p className={css.termsText}>
            This role will be of particular interest to an experienced
            regulatory professional with a strong focus on cloud communications
            and telecommunications, who is passionate about driving compliance
            excellence while mentoring a team.
          </p>
          <p className={css.termsText}>
            Regulbe is an equal opportunity employer. We encourage applications
            from individuals of all backgrounds and experiences.
          </p>
          <p className={css.termsText}>
            To apply or inquire further, please contact us at
            <a href="mailto: info@regulbe.com" className={css.termsAccent}>
              {' '}
              info@regulbe.com
            </a>
          </p>
          <p className={css.termsText}>
            Join Regulbe and lead the way in cloud communications and
            telecommunications regulatory compliance!
          </p>
          <h2 className={css.secondaryHeaders}>Express Your Interest:</h2>
          <p className={css.termsText}>
            We're always excited to hear from talented individuals who are
            passionate about what they do. If you believe you could be a great
            fit for our team, please reach out to us at
            <a href="mailto: info@regulbe.com" className={css.termsAccent}>
              {' '}
              info@regulbe.com
            </a>
          </p>
          <p className={css.termsText}>
            Feel free to share your resume and tell us why you're interested in
            joining Regulbe.
          </p>
          <p className={css.termsText}>
            Thank you for considering Regulbe as your potential future
            workplace. We look forward to connecting with you and exploring the
            possibilities of having you on board when opportunities arise.
          </p>
          <h2 className={css.secondaryHeaders}>Stay Updated:</h2>
          <p className={css.termsText}>
            To stay informed about future job openings and company updates, keep
            an eye on our website's{' '}
            <a className={css.termsAccent} href="/regulbe/careers">
              Careers{' '}
            </a>{' '}
            page. Your journey with Regulbe could be just around the corner.
          </p>
        </div>
      </div>
    </>
  );
};

export default Careers;
