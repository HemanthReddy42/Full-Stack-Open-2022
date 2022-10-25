const Courses = (props) => {
  return (
    <>
      {props.courses.map(val => (
        <Course key={val.id} course={val} />
      ))}
    </>
  );
};

const Course = (props) => {
  return (
    <div>
          <Header course={props.course} />
          <Content content={props.course.parts} />
          <Total course={props.course} />
    </div>
  );
};


const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Content = (props) => {
  return (
    <div>
      {props.content.map((value) => (
        <Part key={value.id} name={value.name} exercises={value.exercises} />
      ))}
    </div>
  );
};

const Part = (props) => {
  return (
    <h3>
      {props.name} : {props.exercises}
    </h3>
  );
};

const Total = (props) => {
  return (
    <h4>
      Total no of exercises : <Sum part={props.course.parts} />
    </h4>
  );
};

const Sum = (props) => {
  return <>{props.part.reduce((s, p) => s + p.exercises, 0)}</>;
};

export default Courses;
