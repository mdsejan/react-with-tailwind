import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const PriceOptions = [
    {
      id: "1",
      name: "Basic Membership",
      description: "Access to basic gym facilities",
      price: 29.99,
      features: [
        "Unlimited gym access",
        "Cardio equipment",
        "Strength training area",
        "Locker room access",
        "Free towel service",
        "Access to fitness classes (limited)",
      ],
    },
    {
      id: "2",
      name: "Premium Membership",
      description: "Access to premium gym facilities and services",
      price: 49.99,
      features: [
        "Everything in Basic Membership",
        "Group fitness classes",
        "Personal trainer sessions (2 per month)",
        "Sauna and steam room access",
        "Nutritional consultation",
        "Discounts on gym merchandise",
      ],
    },
    {
      id: "3",
      name: "Family Membership",
      description: "Ideal for families with shared access",
      price: 79.99,
      features: [
        "Everything in Premium Membership",
        "Access for two adults and two children",
        "Kids' play area",
        "Family locker room",
        "Complimentary family fitness classes",
        "Monthly family fitness challenge",
      ],
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto my-16 text-center">
      <h2 className="text-5xl mb-12 text-stone-600 font-bold underline">
        Best Prices in the Town
      </h2>
      <div className="grid grid-cols-3 gap-8 text-left">
        {PriceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
