type CityProps = {
  name: string;
};

export const City = ({ name }: CityProps) => {
  return <label className="font-sans text-xl">{name}</label>;
};
