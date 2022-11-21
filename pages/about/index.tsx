import AppLayout from "../../components/appLayout/appLayout";
import React from "react";

const About: React.FC = () => {
  return (
    <AppLayout>
      <article className='prose prose-sm sm:prose-base prose-neutral dark:prose-invert'>
        <h1>关于我</h1>
        <p>
          To be continued
        </p>
      </article>
    </AppLayout>
  )
}

export default About
