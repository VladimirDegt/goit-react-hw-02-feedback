import PropTypes from 'prop-types';

export function Section({title, children}){
  return (
      children.type.name === 'FeedbackOptions'
      ?
        <> 
          <h1>{title}</h1>
          {children}
        </>
      :
        <>
          <h2>{title}</h2>
          {children}
        </>
  )
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};