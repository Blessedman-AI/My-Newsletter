import FormData from '@components/NewsletterForm';

const sendEmail = async (data) => {
  const apiEndpoint = '/api/email';

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const parsedResponse = await response.json();
    alert(parsedResponse.message);
  } catch (err) {
    alert(err);
  }
};

export default sendEmail;
