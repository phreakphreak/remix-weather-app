type TemperatureProps = {
  degrees: number;
};

export const Temperature = ({ degrees }: TemperatureProps) => {
  return (
    <>
      <section>{degrees}°</section>
    </>
  );
};
