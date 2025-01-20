import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import addJobSchema from "../schemas";
const EditJobPage = ({ editJob }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = useLoaderData();
  console.log(job);
  const initialValues = {
    type: job.type,
    title: job.title,
    description: job.description,
    salary: job.salary,
    location: job.location,
    companyName: job.company.companyName,
    companyDescription: job.company.companyDescription,
    contactEmail: job.company.contactEmail,
    contactPhone: job.company.contactPhone,
  };
  console.log(initialValues)
  const onSubmit = (values) => {
    const editdJob = {
      type: values.type,
      title: values.title,
      location: values.location,
      salary: values.salary,
      description: values.description,
      company: {
        contactPhone: values.contactPhone,
        contactEmail: values.contactEmail,
        companyDescription: values.companyDescription,
        companyName: values.companyName,
      },
    };
    editJob({ id, ...editdJob });
    toast("job edit successfully");
    navigate("/jobs");
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <Formik
            initialValues={initialValues}
            validationSchema={addJobSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                {console.log(errors)}
                <h2 className="text-3xl text-center font-semibold mb-6">
                  Edit Job
                </h2>

                <div className="mb-4">
                  <label
                    htmlFor="type"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Job Type
                  </label>
                  <Field
                    name="type"
                    as="select"
                    className="border rounded w-full py-2 px-3"
                    id="type"
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                  </Field>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Job Listing Name
                  </label>

                  <Field
                    id="title"
                    name="title"
                    type="text"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder="eg. Beautiful Apartment In Miami"
                  ></Field>
                  <div className="   text-red-700 px-4 py-3 rounded relative">
                    {errors.title && touched.title && <p>{errors.title}</p>}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Description
                  </label>
                  <Field
                    id="description"
                    name="description"
                    className="border rounded w-full py-2 px-3"
                    rows="4"
                    placeholder="Add any job duties, expectations, requirements, etc"
                    as="textarea"
                  />
                  <div className="text-red-700 px-4 py-3 rounded relative">
                    {errors.description && touched.description && (
                      <p>{errors.description}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="type"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Salary
                  </label>

                  <Field
                    as="select"
                    id="salary"
                    name="salary"
                    className="border rounded w-full py-2 px-3"
                  >
                    <option value="Under $50K">Under $50K</option>
                    <option value="$50K - 60K">$50K - $60K</option>
                    <option value="$60K - 70K">$60K - $70K</option>
                    <option value="$70K - 80K">$70K - $80K</option>
                    <option value="$80K - 90K">$80K - $90K</option>
                    <option value="$90K - 100K">$90K - $100K</option>
                    <option value="$100K - 125K">$100K - $125K</option>
                    <option value="$125K - 150K">$125K - $150K</option>
                    <option value="$150K - 175K">$150K - $175K</option>
                    <option value="$175K - 200K">$175K - $200K</option>
                    <option value="Over $200K">Over $200K</option>
                  </Field>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Location
                  </label>

                  <Field
                    type="text"
                    id="location"
                    name="location"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder="Company Location"
                  ></Field>
                  <div className="text-red-700 px-4 py-3 rounded relative">
                    {errors.location && touched.location && (
                      <p>{errors.location}</p>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl mb-5">Company Info</h3>

                <div className="mb-4">
                  <label
                    htmlFor="company"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Company Name
                  </label>

                  <Field
                    type="text"
                    id="company"
                    name="companyName"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Company Name"
                  ></Field>

                  <div className="text-red-700 px-4 py-3 rounded relative">
                    {errors.companyName && touched.companyName && (
                      <p>{errors.companyName}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="company_description"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Company Description
                  </label>

                  <Field
                    id="company_description"
                    name="companyDescription"
                    className="border rounded w-full py-2 px-3"
                    rows="4"
                    placeholder="What does your company do?"
                    as="textarea"
                  />
                  <div className="text-red-700 px-4 py-3 rounded relative">
                    {errors.companyDescription &&
                      touched.companyDescription && (
                        <p>{errors.companyDescription}</p>
                      )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="contact_email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Contact Email
                  </label>
                  <Field
                    type="email"
                    id="contact_email"
                    name="contactEmail"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Email address for applicants"
                  ></Field>
                  <div className="text-red-700 px-4 py-3 rounded relative">
                    {errors.contactEmail && touched.contactEmail && (
                      <p>{errors.contactEmail}</p>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="contact_phone"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Contact Phone
                  </label>
                  <Field
                    type="tel"
                    id="contact_phone"
                    name="contactPhone"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Optional phone for applicants"
                  ></Field>
                  <div className="text-red-700 px-4 py-3 rounded relative">
                    {errors.contactPhone && touched.contactPhone && (
                      <p>{errors.contactPhone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Edit Job
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;
