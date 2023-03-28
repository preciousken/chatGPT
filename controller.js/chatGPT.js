const methods = {};
const { json } = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);
methods.getAnswer = (req) => {
  // getting the for data
  body = req.body
  // creating an explanation text to chatGPT
  // const explanation = `Create a table summarizing the key information of the legal 
  //     contract in the following categories: Parties Involved, Obligations, 
  //     Payment Terms, Termination, Intellectual Property, Confidentiality, 
  //     Governing Law. For each category, include the key points, risk level 
  //     (L, M, H), and benchmark to risk level compared to similar industry.

  //     `

  const explanation = `Create a javascript json that is well formatted, summarizing the key information of the legal 
      contract in the following categories: Parties Involved, Obligations, 
      Payment Terms, Termination, Intellectual Property, Confidentiality, 
      Governing Law. For each category, include the key points, risk level 
      (L, M, H), and benchmark to risk level compared to similar industry. in the information provided next;


      `

      // body.question =
      //  `
      
      // This site uses cookies, some of which are required for its operation. Follow the link to learn more on how we
      // Independent Contractor Agreementcomply with privacy laws in Europe and click Accept to let us know you are okay with our updates. Privacy Policy.
      // Accept
      // THE PARTIES TO THIS AGREEMENT ARE:
      // (hereinafter referred to as "the Company")
      // AND
      // Independent Contractor's Personal or Company Details:
      // Full Names:
       
      // Identity /Social Security or Other (Specify) number:
       
      // Physical Address:
       
      // Postal Address:
       
      // (hereinafter referred to as "the Contractor")
      // 1. COMMENCEMENT:
      // THIS CONTRACT WILL COMMENCE ON
      // ____________________________ 20_____ AND EXPIRES ON:
      // ____________________________ 20_____
       
      // ____________________________ 20_____
      // AND EXPIRES when the services as outlined in this agreement have been completed.
      // It is expressly understood and accepted that this is not an employment agreement and as such the Contractor will have no claim to Company benefits or employee considerations, including but not limited to profit sharing, pension, shares or bonuses. Upon expiry of this contract it is understood that that the relationship between the parties has ended.
      // 2.DESCRIPTION OF SERVICES:
       
      // 2.1. It is agreed by both parties that the Contractor has full control on how these services will be performed subject to it meeting the standards required by the Company.
      // 2.2. The Contractor warrants that he / she is not violating any other agreement by performing these services.
      // 2.3. The Contractor agrees that services not meeting the standards required by the Company will be corrected. The parties agree that the Contractor will have at least one opportunity to re-perform services, should any services not meet the standards required by the Company, within a specified time limit.
      // 2.4. The Contractor warrants that no laws will be violated in performing any services and warrants that liability insurance and all permits and licenses required to performing any services are current and in place.
      // 2.5. The Contractor guarantees that he / she is competent to carry out the services which he / she has undertaken in this contract. Any material misrepresentation shall lead to summary termination of this agreement.
      // 2.6. The Contractor shall perform these services at the following address:
      // ___________________________________________________
      // 3.	PAYMENT:
      // The Contractor will be paid on the following basis:
      // FIXED RATE
      // 3.1.	Upon completion of the services as specified in 2. above, the Company will pay the Contractor thesum of _______________________________($______).
      // 3.2.	The Company agrees to pay the Contractor within ______ days of completion of the services infull OR in ______________ equal monthly installments of
      // ______________________________($______), starting within ______________days of completion of the services.
       
      // 3.1.	For performing of the services as specified in 2. above, the Company agrees to pay the
      // Contractor the sum of ___________________________($______) per hour / day / month.
      // 3.2.	The Company agrees to pay the Contractor within ________days of receipt of a timesheetdeclaring the total time worked, together with the Contractor's invoice.
      // 3.3.	The Contractor agrees that should he / she withhold their services for whatever reason, aprinciple of "no work, no pay" shall apply.
      // OR
      // RETAINER
      // 3.1.	The Company agrees to pay the Contractor for performing the services as in 2. above the sum of__________________________($_______) as a retainer upon signing of this agreement.
      // 3.2.	The retainer as specified in 3.1. is a once-off payment.
      // OR
      // 3.2.	The Company will pay the Contractor an additional monthly retainer of
      // __________________________($_______) on the first day of each month until the termination of this agreement.
      // 3.3.	In addition to the retainer as in 3.2. the Company will reimburse the Contractor expenses incurredby the Contractor on behalf of the Company provided a detailed statement with applicable receipts is presented to the Company.
      // 3.4.	The Company agrees to pay the Contractor expenses claimed as per 3.3. within ________daysof receipt of the expenses statement.
      // 4.	ASSISTANTS:
      // 4.1.	Should the Contractor employ assistants to perform the services as in 2., all provisions in thisagreement including but not limited to confidentiality, ownership of works and indemnification shall be binding upon all assistants of the Contractor.
      // 4.2.	Remuneration for assistants to the Contractor to perform the services under this agreement mustbe paid by the Contractor.
      // 4.3.	The Company agrees that all directives or instructions to assistants will be communicated throughthe Contractor.
      // 5.	CONFIDENTIALITY:
      // 5.1.	The Contractor acknowledges that during the relationship with the Company, the Contractor maybecome familiar with its confidential information including commercial and technical secrets and / or the confidential information of clients of the Company.
      // 5.2.	The Contractor consequently agrees that during the period of performing services and
      // subsequent thereto, the Contractor will not disclose to others or make use of directly or indirectly, any confidential information of the Company or confidential information of a client of the Company or of others who have disclosed it to the Company under conditions of confidentiality, unless for a purpose authorized by the Company. If there is any doubt about whether any disclosure or use is for an authorized purpose, the Contractor is to obtain a ruling in writing from the Company and is to abide by it.
      // 5.3.	The Contractor shall take reasonable security precautions to keep confidential all informationdeemed confidential and shall not make unauthorized copies. He / she further undertakes to notify the Company immediately upon discovery of any unauthorized use or disclosure of confidential material and shall assist the Company in regaining of such material and mitigating the loss to the Company there from.
      // 5.4.	For the purpose of this clause, confidential information will be deemed to extend to all confidentialtechnical and commercial information, including, but not limited to the contents of reports, specifications, quotations, formulae, computer records, client lists, price schedules, customer lists, customers and the like.
      // 5.5.	The Contractor is required to deliver to the Company whenever required to do so, or in any eventwhen terminating the relationship with the Company, all books of account, records, correspondence, notes, computer disks, and the like concerning or containing any reference to the business of the Company or the Company's clients.
      // 6.	OWNERSHIP OF WORK:
      // 6.1.	Any documents or records or creations including but not limited to written instructions, drawings,photographs, computer programs, notes or memoranda relating to the business of the Company, which are made by the Contractor or which come into the Contractor's possession while he / she is engaged by the Company to perform services, shall be deemed the property of the Company and shall be surrendered to the Company on demand and, in any event, on the date of termination of this agreement The Contractor will not retain any copies thereof or any extracts there from.
      // 6.2.	The Contractor does hereby assign to the Company the total right, title and interest in and to anycopyright in any existing or future works or part thereof of whatsoever nature that the Contractor, individually or jointly with any other person(s) has made or created or will make or will create during the course and scope of this agreement and the performing of services by the Contractor for the Company.
      // 7.	OBLIGATIONS OF THE CONTRACTOR:
      // 7.1.	The Contractor agrees to take full responsibility for declaration of income for tax purposes and forthe payment thereof.
      // 7.2.	The Contractor will not be liable to the Company or its agents or employees for any claim, cost orfees arising from the services provided by this agreement, unless any such claims, costs or fees are judged by the appropriate court to be due to willful misconduct or gross negligence on the part of the Contractor or his agents.
      // 7.3.	The Contractor shall supply all equipment or tools or instruments needed to perform the servicesunder this agreement.
      // 8.	OBLIGATIONS OF THE COMPANY:
      // 8.1.	The Company acknowledges that timely completion of the services provided by the Contractorunder this agreement, depends on the co-operation of the Company to comply with reasonable requests from the Contractor and the Company agrees to extend such co-operation.
      // 8.2.	Upon the death of a Contractor whilst under the terms of this agreement, the Company shall payall monies due to the estate of the Contractor.
      // 9.	NOTICE OF TERMINATION:
      // 9.1.	This contract will terminate as per 1 above with NO notice required. However, either party mayterminate this contract in writing in the following instances:
      // 9.1.1.	If either party is convicted of a criminal offence.
      // 9.1.2.	Non-payment to the Contractor by the Company as agreed upon in this agreement and failureto remedy within 30 days from the date payment is due.
      // 9.1.3.	Failure by the Contractor to meet deadlines for performance of services or failing to meet thestandards required by the Company in the performing of services.
      // 9.1.4.	Insolvency or bankruptcy of either party.
      // 9.1.5.	Change of ownership of the business of either party.
      // 10.	GENERAL:
      // 10.1.	This agreement and any exhibit attached constitute the sole and entire agreement between theparties with regard to the subject matter hereof and the parties waive the right to rely on any alleged express provision not contained herein.
      // 10.2.	No party may rely on any representation, which allegedly induced that party to enter into thisagreement, unless the representation is recorded herein.
      // 10.3.	No agreement varying, adding to, deleting from or canceling this agreement and no waiver ofany right under this agreement shall be effective unless it is:
      // 10.3.1.	In writing;
      // 10.3.2.	Agreed to by both parties;
      // 10.3.3.	Signed by both parties.
      // 10.4.	Written notice by either party to the other may be given:
      // 10.4.1.	In person, and such notice shall be deemed valid on the date of delivery in person.
      // 10.4.2.	By registered mail, and such notice shall be deemed valid as of seven days of the proof ofmailing date.
      // 10.5.	No relaxation by a party of any of its rights in terms of this agreement at any time shallprejudice or be a waiver of its rights (unless it is a written waiver) and it shall be entitled to exercise its rights hereafter as if such relaxation had not taken place.
      // 10.6.	No party may cede any of its rights or delegate or assign any of its obligations in terms of thisagreement without the prior written consent of the other parties.
      // 10.7.	Unless inconsistent with the context, words signifying any one gender shall include the others,words signifying the singular shall include the plural and vice versa and words signifying natural persons shall include artificial persons and vice versa.
      // 10.8.	Should any provision of this agreement be judged by an appropriate court of law as invalid, itshall not affect any of the remaining provisions whatsoever.
      // 10.9.	The parties agree that any dispute which may arise from this agreement will be referred to animpartial and lawful arbitration body whose decision will be binding upon both parties.
      // By signing below, the Contractor certifies under the penalty of perjury that the name and address given is the Contractor's legal name, address and identification number.
      // Signed at _____________________on this ______day of _________________20___ SIGNATURE _____________________________(for and on behalf of the Company) Employer's Full Names:
       
      // WITNESS 1: _____________________________
      // WITNESS 2: _____________________________
      // SIGNATURE _____________________________(Contractor) Contractor's Legal Name:
       
      // WITNESS 1: _____________________________
      // WITNESS 2: _____________________________
      
      // `











      
      // body.question =
      //  `
      //  Samples are provided for reference only. Always consult current legislation in your jurisdiction to create
      //  policies and procedures and contracts for your organization.
      //  SAMPLE AGREEMENT
      //  This Agreement is entered into as of the XX day of October, 200X, between
      //  ___________(“the Committee”) and ____________ (“the Contractor”).
      //  1. Independent Contractor. Subject to the terms and conditions of this Agreement, the
      //  Committee hereby engages the Contractor as an independent contractor to perform
      //  the services set forth herein, and the Contractor hereby accepts such engagement.
      //  2. Duties, Term, and Compensation. The Contractor’s duties, term of engagement,
      //  compensation and provisions for payment thereof shall be as set forth in the budget
      //  which is attached as Schedule A, which may be amended in writing from time to
      //  time, or supplemented with subsequent estimates for services to be rendered by the
      //  Contractor and agreed to by the Committee, and which collectively are hereby
      //  incorporated by reference.
      //  3. Expenses. During the term of this Agreement, the Contractor shall bill and the
      //  Committee shall reimburse her for all reasonable and approved out-of-pocket
      //  expenses as set forth in Schedule A which are incurred in connection with the
      //  performance of the duties hereunder.
      //  4. Written Reports. The Committee may request that project plans, progress reports
      //  and a final results report be provided by Consultant.. A final results report shall be
      //  due at the conclusion of the project and shall be submitted to the Committee in a
      //  confidential written report at such time. The results report shall be in such form and
      //  setting forth such information and data as is reasonably requested by the Committee.
      //  5. Confidentiality. Upon the expiration or earlier termination of this Agreement, or
      //  whenever requested by the Committee, the Contractor shall immediately deliver to
      //  the Committee all such files, records, documents, specifications, information, and
      //  other items in her possession or under her control. The Contractor further agrees
      //  that she will not disclose her retention as an independent contractor or the terms of
      //  this Agreement to any person without the prior written consent of the Committee and
      //  shall at all times preserve the confidential nature of her relationship to the Committee
      //  and of the services hereunder.
      //  6. Conflicts of Interest; The Contractor represents that she is free to enter into this
      //  Agreement and that this engagement does not violate the terms of any agreement
      //  between the Contractor and any third party. During the term of this agreement, the
      //  Contractor shall devote as much of her productive time, energy and abilities to the
      //  performance of her duties hereunder as is necessary to perform the required duties
      //  in a timely and productive manner. The Contractor is expressly free to perform
      //  services for other parties while performing services for the Committee.
      //  7. Termination. The Committee may terminate this Agreement at any time by 10
      //  working days’ written notice to the Contractor. In addition, if the Contractor is
      //  convicted of any crime or offense, fails or refuses to comply with the written policies
      //  or reasonable directive of the Committee, is guilty of serious misconduct in
      //  connection with performance hereunder, or materially breaches provisions of this
      //  Agreement, the Committee at any time may terminate the engagement of the
      //  Contractor immediately and without prior written notice to the Contractor.
      //  8. Independent Contractor. This Agreement shall not render the Contractor an
      //  employee, partner, agent of, or joint venturer with the Committee for any purpose.
      //  The Contractor is and will remain an independent contractor in her relationship to the
      //  Committee. The Committee shall not be responsible for withholding taxes with
      //  respect to the Contractor’s compensation hereunder. The Contractor shall have no
      //  claim against the Committee hereunder or otherwise for vacation pay, sick leave,
      //  retirement benefits, social security, worker’s compensation, health or disability
      //  benefits, unemployment insurance benefits, or employee benefits of any kind.
      //  9. Insurance. The Contractor will carry liability insurance (including malpractice
      //  insurance, if warranted) relative to any service that she performs for the Committee.
      //  10. Assignment. The Contractor shall not assign any of her rights under this Agreement,
      //  or delegate the performance of any of her duties hereunder, without the prior written
      //  consent of the Committee.
      //  11. Modification or Amendment. No amendment, change or modification of this
      //  Agreement shall be valid unless in writing signed by the parties hereto.
      //  12. Entire Understanding. This document and any exhibit attached constitute the entire
      //  understanding and agreement of the parties, and any and all prior agreements,
      //  understandings, and representations are hereby terminated and canceled in their
      //  entirety and are of no further force and effect.
      //  13. Unenforceability of Provisions. If any provision of this Agreement, or any portion
      //  thereof, is held to be invalid and unenforceable, then the remainder of this
      //  Agreement shall nevertheless remain in full force and effect.
      //  IN WITNESS WHEREOF the undersigned have executed this Agreement as of the day
      //  and year first written above. The parties hereto agree that facsimile signatures shall be
      //  as effective as if originals.
      //  By:_______________________ By:___________________
      //  SCHEDULE A
      //  DUTIES, TERM, AND COMPENSATION
      //  DUTIES: The Contractor will:
      //  TERM: This engagement shall commence upon execution of this Agreement and
      //  shall continue in full force and effect through January 15,2004 or earlier
      //  upon completion of the Contractor’s duties under this Agreement. The
      //  Agreement may only be extended thereafter by mutual agreement,
      //   unless terminated earlier by operation of and in accordance with this
      //  Agreement.
      //  COMPENSATION:
      //   As full compensation for the services rendered pursuant to this
      //  Agreement, the Committee shall pay the Contractor at the hourly rate of
      //  ________ per hour, with total payment not to exceed________ without
      //  prior written approval by an authorized representative of the Committee.
      //  Such compensation shall be payable within 30 days of receipt of
      //  Contractor’s monthly invoice for services rendered supported by
      //  reasonable documentation.
      //  EXPENSES:
      // `


    return new Promise(async(resolve, reject) => {
       try{
        openai.createCompletion({
            // model: "text-davinci-001",
            model: "text-davinci-003",
            prompt:`${explanation} ${ body.question}`,
            // prompt : body.question,
            temperature: 0,
            // max_tokens: 60,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          }).then((data)=>{
            resolve({
              status:200, 
              message: JSON.parse(data.data.choices[0].text), 
              finished_reason: data.data.choices[0].finish_reason
            });

          });
       }catch(e){
          reject(e);
       }
    })

}
module.exports = methods;