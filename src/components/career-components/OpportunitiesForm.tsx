import { useFormik } from "formik";

const OpportunitiesForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="email" className="font-roboto text-color-natural-gray">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="border-b border-color-natural-gray bg-primary-background h-14 focus:outline-none"
        />
      </div>

      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="flex flex-col md:w-1/2">
          <label
            htmlFor="firstName"
            className="font-roboto text-color-natural-gray mt-4"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="border-b border-color-natural-gray bg-primary-background h-14 focus:outline-none"
          />
        </div>

        <div className="flex flex-col md:w-1/2">
          <label
            htmlFor="lastName"
            className="font-roboto text-color-natural-gray mt-4"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="border-b border-color-natural-gray bg-primary-background h-14 focus:outline-none"
          />
        </div>
      </div>
      <div className="mt-10">
        <button className="bg-primary-color text-color-white font-roboto text-sm md:text-lg px-4 py-2 rounded-full">
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default OpportunitiesForm;
