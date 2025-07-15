export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  
    const { name, email, phone, company, stage, inquiry } = req.body;
  
    try {
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY!,
        },
        body: JSON.stringify({
          email,
          attributes: {
            FIRSTNAME: name,
            PHONE: phone,
            COMPANY: company,
            STAGE: stage,
            INQUIRY: inquiry,
          },
          listIds: [2], // replace with your Brevo list ID
          updateEnabled: true,
        }),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        return res.status(response.status).json({ error: result.message });
      }
  
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
  