import React from 'react';
import './Terms.scss';
// import { useSelector } from 'react-redux';
// import TermsService from '../../services/TermsService';
export interface TermsProps {
  // handleClose: () => void,
}

const Terms: React.FC<TermsProps> = () => {
  // const partnerKey: string = useSelector((state: any) => state.partnerKey);
  // const termsService = new TermsService();

  // const handleOnClick = () => {
  //   termsService.postTerms({ partnerKey }).then((data: any) => {
  //     if(data) {
  //       console.log(data);
  //       handleClose();
  //     }
  //   });
  // };

  return (
    <>
      <div className="terms__container text_regular text_justify">
        <h2 className="terms__title text_center">LICENSE AND SERVICES AGREEMENT</h2>
        <p className="terms__text">
          This License and Service Agreement (the "<strong>Agreement</strong>") is a legal agreement
          by and between <strong>Voice Front Ltd.,</strong> a company incorporated under the laws of
          the State of Israel having its principal place of business at ("
          <strong>VoiceFront</strong>") and you ("<strong>you</strong>"). This agreement take effect
          when you click the "Accept" button presented at the bottom of this Agreement (the "
          <strong>Effective Date</strong>").
        </p>
        <p className="terms__text">
          You must accept these terms and conditions in order to complete the registration process
          and start using our services which include: (a) using our unique conversational bot
          technology ("<strong>Technology</strong>"), we will create and manage, on your behalf, an
          online voice store for your e-commerce website which will enable your website's end-users
          ("<strong>End-User(s)</strong>") to interact with your website using voice (including
          purchasing the products offered in your website) (the interaction via voice will be
          enabled using the End-Users' device virtual assistants such as Alexa) (the "
          <strong>Platform</strong>"); and (b) enabling you to use our proprietary cloud based
          console which will assist you in managing the interaction of your End-Users with your
          website (the "<strong>Console</strong>"); (the "<strong>Platform</strong>" and the "
          <strong>Console</strong>" shall be referred to as together as the "Services").
        </p>
        <p className="terms__text text_strong text_uppercase">
          PLEASE READ THE TERMS AND CONDITIONS OF THIS AGREEMENT CAREFULLY BEFORE USING THE
          SERVICES. BY CLICKING THE "I ACCEPT" BUTTON BELOW YOU (EITHER INDIVIDUALLY OR ON BEHALF OF
          THE ENTITY OR COMPANY THAT YOU DULY REPRESENT) ARE ACCEPTING AND AGREEING TO BE BOUND BY
          THE TERMS OF THIS AGREEMENT.
        </p>
        <div className="terms__text text__columns">
          <p className="terms__part">
            1. <strong>Evaluation License</strong>. During the period which shall commence upon the
            receipt of a confirmation e-mail that the Platform is ready for use and for a period of
            ninety (90) days thereafter (the "<strong>Evaluation Term</strong>") VoiceFront grants
            you, and you accept a right to access the Services online or by any remote means on a
            Software-as-a-Service ("<strong>SaaS</strong>") basis (which right is limited and is
            provided on a non-exclusive, non-sublicensable, non-transferable and revocable basis)
            for evaluation purposes only, all in accordance with the terms set forth in this
            Agreement.
          </p>
          <p className="terms__part">
            2. <strong>Subscription License.</strong> In the event that you wish to receive the
            right to use the Services also for applicable subscription periods (the "
            <strong>Subscription Periods</strong>"), then you may continue to use the Services after
            the Evaluation Term for internal commercial purposes, all subject to the terms and
            conditions of this Agreement. In the event that you determine not to extend the term of
            this Agreement beyond the Evaluation Term then your rights under this Agreement shall
            terminate.
          </p>
          <p className="terms__part">
            3. <strong>API</strong>. In order to be able to provide you the Platform, we are
            required to receive access to your website's application programming interface (the "
            <strong>API</strong>"). For such purpose, you agree to grant us any access keys required
            in order to access your API and hereby grant us a limited, nonexclusive, revocable,
            non-sublicensable, non-transferable license to access and use your website's API and
            retrieve the information included in your website that is required in order to provide
            you the Services. You hereby represent that you are the owner or licensor of the API,
            and you have the power to grant the rights granted under this Section.
          </p>
          <p className="terms__part">
            4. <strong>Consideration</strong>. The license granted during the Evaluation Period is
            provided free of charge. The consideration for the license granted during the
            Subscription Periods, will be in accordance with the payment model specified in
            VoiceFront's payment policy available at:{' '}
            <a href="https://www.voicefront.ai/pricing" target="blank">
              https://www.voicefront.ai/pricing
            </a>{' '}
            (the "<strong>Services Fees</strong>"). You will pay all amounts due under this
            Agreement in U.S. Dollars currency. All amounts invoiced hereunder are due and payable
            within thirty (30) days of the date of the invoice. All fees and other amounts paid by
            you under this Agreement are non-refundable. Any amount not paid when required to be
            paid hereunder shall accrue interest on a daily basis until paid in full at the lesser
            of: (i) the rate of one and a half percent (1.5%) per month; or (ii) the highest amount
            permitted by applicable law. All amounts payable under this Agreement are exclusive of
            all sales, use, value-added, withholding, and other direct or indirect taxes, charges,
            levies and duties. All taxes, withholdings and duties of any kind payable with respect
            to your subscription to the Services under this Agreement, other than taxes based on
            VoiceFront's net income, shall be borne and paid by you.
          </p>
          <p className="terms__part">
            You represent that (i) all the information provided by you while using the Service is
            true and accurate; (ii) you have the legal right to subject your designated website to
            the Service and/or that you have obtained such right from the legal owner. You shall
            indemnify, defend and hold VoiceFront harmless from any claims, demands, liabilities,
            losses, costs or expenses, including reasonable attorneys' fees, incurred by VoiceFront
            as a result of any claim or proceeding raised against VoiceFront arising out of or based
            upon any breach or misrepresentation of your representations under this Section.
          </p>
          <p className="terms__part">
            5. <strong>Account</strong>. In order to access and use the Service, an account will be
            created using the credentials provided to you by VoiceFront (the "
            <strong>Account</strong>"). The Account will be accessed and/or used solely by your
            employees or service providers who are explicitly authorized by you to use the Services
            (each, a "<strong>Permitted User</strong>"). You hereby acknowledge and agree: (i) to
            keep, and ensure that the Permitted Users will keep, the Account login details and
            passwords secured at all times, and otherwise comply with the terms of this Agreement;
            (ii) to remain solely responsible and liable for the activity that occurs in the Account
            and for any breach of this Agreement by a Permitted User; and (iii) to promptly notify
            VoiceFront in writing if you become aware of any unauthorized access or use of the
            Account.
          </p>
          <p className="terms__part">
            6. <strong>Prohibited Uses</strong>. Except as specifically permitted herein, without
            the prior written consent of VoiceFront, you must not, and shall not allow any Permitted
            User or any other third party to, directly or indirectly: (i) modify, incorporate into
            or with other software, or create a derivative work of any part of the Service; (ii)
            sell, license (or sub-license), lease, assign, transfer, pledge, or share your rights
            under this Agreement with or to anyone else; (iii) copy, distribute or reproduce the
            Service for the benefit of third parties; (iv) disclose the results of any testing or
            benchmarking of the Service to any third party, or use such results for your own
            competing software development activities or use the Service in order to build or
            support, and/or assist a third party in building or supporting, products or services
            which are competitive to VoiceFront's business; (v) modify, disassemble, decompile,
            reverse engineer, revise or enhance the Service or attempt to discover the Platform's
            and/or Console’s source code or the underlying ideas or algorithms of the Platform's
            and/or Console’s; (vi) use the Service in a manner that violates or infringes any rights
            of any third party, including but not limited to, right of privacy, proprietary rights
            or intellectual property rights of any third parties including without limitation
            copyright, trademarks, designs, patents and trade secrets; (vii) remove or otherwise
            modify any of VoiceFront's trademarks, logos, copyrights, notices or other proprietary
            notices or indicia, if any, fixed, incorporated, included or attached to the Platform
            and/or Console nor copy the any written materials accompanying the Console and/or
            Platform; (ix) use the Service for any purpose other than for the purpose for which the
            Service is designated for or other than in compliance with the terms of this Agreement;
            (x) use any automated means to access the Service; (xi) use the Service without
            receiving the applicable End-Users' prior explicit consent for the collection of
            personally identifiable information as required under any applicable law; (xii) violate
            or abuse log-in and/or password protections governing access to the Console; (xv) allow
            any third party other than the Permitted Users to use the Service; (xvi) access, store,
            distribute, or transmit during the course of its use of the Service any malicious code
            (i.e., software viruses, Trojan horses, worms, malware or other computer instructions,
            devices, or techniques that erase data or programming, infect, disrupt, damage, disable,
            or shut down a computer system or any component of such computer system), or unlawful,
            threatening, obscene or infringing material; and/or (xvii) use the Service in any other
            unlawful manner or in any manner not expressly authorized by this Agreement.
          </p>
          <p className="terms__part">
            7. <strong>End-User Data and Analytics Information</strong>. Operation of the Platform
            and the provision of the Services hereunder require VoiceFront to monitor interactions
            of your End-Users with the Platform and require you to provide, upload, transmit, or
            make accessible to VoiceFront certain data, including without limitation, personally
            identifiable information transmitted through your website via the API (collectively, the
            "<strong>End-User Data</strong>"), as further detailed in VoiceFront's Services Privacy
            Policy, available at:{' '}
            <a href="https://www.voicefront.ai/privacy-policy">
              https://www.voicefront.ai/privacy-policy
            </a>
            . You agree that VoiceFront will collect, monitor, store and use the End-User Data, on
            your behalf, in order to provide the Services. You control access to the End-User Data
            and have full administrative control over such data, including by your right to view or
            modify it. As between VoiceFront and you, the Intellectual Property Rights (as such term
            is defined below) and all other rights, title and interest of any nature in and to the
            End-User Data, which may be stored on VoiceFront’s database, are and shall remain your
            and your licensors exclusive property. VoiceFront shall be considered granted a
            non-revocable, non-exclusive, assignable, sub-licensable, royalty-free license to use,
            in accordance with any applicable privacy laws, the End-User Data in order to provide
            the Services. Except as set forth herein, nothing in this Agreement shall be construed
            as transferring any rights, title or interests in the End-User Data to VoiceFront or any
            third party.
          </p>
          <p className="terms__part">
            VoiceFront may collect, disclose, publish and use in any other manner anonymous
            information which derives from the use of the Services (i.e., non-identifiable
            information, aggregated and analytics information) ("
            <strong>Analytics Information</strong>")), in order to provide and improve VoiceFront's
            programs and services and for any legitimate business purpose. VoiceFront is and shall
            remain the sole owner of the Analytics Information. In order to interact with the
            Platform, the End-User must provide VoiceFront with the details of his/her device
            virtual assistant account. It is hereby clarified that such data is considered "End-User
            Data". You are responsible to comply with all applicable privacy notices requirements in
            connection thereto.
          </p>
          <p className="terms__part">
            8. <strong>Obligations and Warranties</strong>. You represent that: (i) you will use the
            Services in compliance with any applicable laws, including without limitation privacy
            protection laws; and (ii) you have the full right, authority, permissions, approvals and
            consents from your End-Users to permit VoiceFront to access, use, monitor, process,
            analyze, display and/or store the End-User Data in order to provide the Services. You
            hereby confirm that the privacy policy that you will provide VoiceFront to display as
            part of the Platform, permits VoiceFront to access, use, monitor, process, analyze,
            display and/or store the End-User Data in order to provide the Services. We agree to
            reasonably assist you in displaying to the End-Users, on your behalf, the required
            notices under this section (including your privacy policy) and in receiving End-Users'
            consent for such notices. You are solely responsible that such privacy policy shall be
            accurate at all times and shall comply with all applicable privacy laws. You assume the
            responsibility for receiving the End-Users' requests to delete or modify their personal
            information and handle such requests, and to notify VoiceFront of any such requests. You
            shall remain solely responsible and liable for, and release VoiceFront from, any and all
            liability arising from, VoiceFront’s use of the End-User Data as permitted herein. You
            further acknowledge that you are solely responsible for the backup of your End-User
            Data.
          </p>
          <p className="terms__part">
            Each party represents and warrants (a) that it is duly organized, validly existing and
            in good standing under the laws of its jurisdiction of incorporation or organization;
            and (b) that the execution and performance of this Agreement will not conflict with or
            violate any provision of any applicable law.
          </p>
          <p className="terms__part">
            9. <strong>Ownership</strong>. The Technology, the Console and any other technology
            embodied in the Platform are not for sale and are and shall remain VoiceFront’s sole
            property. All right, title, and interest, including any Intellectual Property Rights
            evidenced by or embodied in, attached, connected, and/or related thereto and any and all
            derivative works thereof are and shall remain owned solely by VoiceFront or its
            licensors. This Agreement does not convey to you any interest in or to any of the
            foregoing but only, as aforesaid, a limited revocable right to use the Services, in
            accordance with the terms of this Agreement, and nothing herein constitutes a waiver of
            VoiceFront’s Intellectual Property Rights under any law. "
            <strong>Intellectual Property Rights</strong>" means: (i) patents and patent
            applications throughout the world, including all reissues, divisions, continuations,
            continuations-in-part, extensions, renewals, and reexaminations of any of the foregoing,
            all whether or not registered or capable of being registered; (ii) common law and
            statutory trade secrets and all other confidential or proprietary or useful information
            that has independent value, and all know-how, in each case whether or not reduced to a
            writing or other tangible form; (iii) all copyrights, whether arising under statutory or
            common law, whether registered or not; (iv) all trademarks, trade names, corporate
            names, company names, trade styles, service marks, certification marks, collective
            marks, logos, and other source of business identifiers, whether registered or not; (v)
            moral rights in those jurisdictions where such rights are recognized; (vi) any rights in
            source code, object code, mask works, databases, algorithms, formulae and processes; and
            (vii) all other intellectual property and proprietary rights, and all rights
            corresponding to the foregoing throughout the world.
          </p>
          <p className="terms__part">
            If you contact VoiceFront with feedback data (e.g., questions, comments, suggestions or
            the like) regarding the Services (collectively, " <strong>Feedback</strong>"), such
            Feedback shall be deemed non-confidential, and VoiceFront shall have a non-exclusive,
            royalty-free, worldwide, perpetual license to use or incorporate such Feedback into the
            Services and/or other current or future products or services of VoiceFront (without your
            approval and without further compensation to you).
          </p>
          <p className="terms__part">
            10. <strong>Confidentiality</strong>. Each party may have access to certain non-public
            and/or proprietary information of the other party, in any form or media, including
            (without limitation) confidential trade secrets and other information related to the
            products, software, technology, data, knowhow, or business of the other party, whether
            written or oral, and any other information that a reasonable person or entity should
            have reason to believe is proprietary, confidential, or competitively sensitive (the "
            <strong>Confidential Information</strong>"). Each party shall take reasonable measures,
            at least as protective as those taken to protect its own confidential information, but
            in no event less than reasonable care, to protect the other party's Confidential
            Information from disclosure to a third party. Neither party shall use or disclose the
            Confidential Information of the other party except as expressly permitted under this
            Agreement or by applicable law. All right, title and interest in and to Confidential
            Information are and shall remain the sole and exclusive property of the disclosing
            party.
          </p>
          <p className="terms__part">
            11. <strong>Reference Customer</strong>. You agree that VoiceFront may identify you as a
            user of the Services and use your trademark and/or logo (i) in sales presentations,
            promotional/marketing materials, and press releases, and (ii) in order to develop a
            brief customer profile for use by VoiceFront on VoiceFront's website for promotional
            purposes.
          </p>
          <p className="terms__part">
            12. <strong>Maintenance and Support</strong>. During the Evaluation Term and thereafter
            (to the extent you have purchased the subscription which entitles you to receive support
            and maintenances services, as detailed in{' '}
            <a href="https://www.voicefront.ai/pricing">https://www.voicefront.ai/pricing</a>,
            VoiceFront will provide you support and maintenances services in accordance with the
            terms and conditions specified in VoiceFront's then current SLA which is available at:{' '}
            <a href="https://www.voicefront.ai/sla">https://www.voicefront.ai/sla</a>
          </p>
          <p className="terms__part">
            13. <strong>Changes to Services</strong>. VoiceFront may change the Services' layout and
            design and the availability of the content and functions included therein or may change
            the form, features or nature of the Services, from time to time, without giving you any
            prior notice. You hereby agree and acknowledge that VoiceFront is not responsible for
            any errors or malfunctions that may occur in connection with the performance of such
            changes.
          </p>
          <p className="terms__part text_uppercase">
            14. <strong> NO WARRANTIES</strong>. TO THE EXTENT PERMITTED BY APPLICABLE LAW, THE
            SERVICES AND THE REPORTS (AS DEFINED BELOW) ARE PROVIDED ON AN "AS IS" BASIS. IN
            ADDITION TO OTHER DISCLAIMERS CONTAINED HEREIN, VOICEFRONT DOES NOT WARRANT THAT THE
            REPORTS AND/OR THE SERVICES WILL MEET YOUR REQUIREMENTS OR THAT THE SERVICES' OPERATION
            AND THE SERVICES WILL BE SECURED AT ALL TIMES, UNINTERRUPTED, ERROR-FREE, FREE OF
            VIRUSES, BUGS, WORMS, OTHER HARMFUL COMPONENTS OR OTHER SOFTWARE LIMITATIONS. THE USE OF
            THE SERVICES HEREUNDER IS AT YOUR SOLE RISK AND TO THE EXTENT ALLOWED BY LAW VOICEFRONT
            EXPRESSLY DISCLAIMS ALL EXPRESS WARRANTIES AND ALL IMPLIED WARRANTIES, INCLUDING, BUT
            NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, NON-INTERFERENCE, FITNESS FOR
            A PARTICULAR PURPOSE, PERFORMANCE, ACCURACY, RELIABILITY AND NON-INFRINGEMENT AND ANY
            WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
          </p>
          <p className="terms__part text_uppercase">
            VOICEFRONT DOES NOT OFFER A WARRANTY OR MAKE ANY REPRESENTATION REGARDING ANY CONTENT,
            REPORTS, INFORMATION (INCLUSING ANALYTICS AND RAW DATA PERTAINING TO THE END USERS),
            INSIGHTS OR RESULTS THAT YOU OBTAIN THROUGH USE OF THE SERVICE (COLLECTIVELY,
            "REPORTS"), OR THAT THE REPORTS ARE ACCURATE, COMPLETE, ERROR FREE OR DO NOT INCLUDE
            FALSE POSITIVE. VOICEFRONT SHALL NOT BE RESPONSIBLE FOR UNAUTHORIZED ACCESS TO OR
            ALTERATION TO THE END-USER DATA TO THE EXTENT THAT SUCH ACCESS OR ALTERATION IS NOT DUE
            TO VOICEFRONT’S WILLFUL MISCONDUCT.
          </p>
          <p className="terms__part text_uppercase">
            15. <strong>LIMITATION OF LIABILITY</strong>. TO THE FULLEST EXTENT PERMITTED BY
            APPLICABLE LAW VOICEFRONT, ITS LICENSORS, AFFILIATES, DISTRIBUTORS AND RESELLERS SHALL
            NOT BE LIABLE WHETHER UNDER CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, TO YOU
            OR ANY THIRD PARTY FOR ANY LOSS OR DAMAGE, INCLUDING, WITHOUT LIMITATION, DIRECT,
            INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, EXEMPLARY OR CONSEQUENTIAL DAMAGES OF ANY KIND
            (INCLUDING BUT NOT LIMITED TO, ANY LOSS OR DAMAGE TO BUSINESS EARNINGS, LOST PROFITS OR
            GOODWILL AND LOST OR DAMAGED DATA OR DOCUMENTATION), SUFFERED BY ANY PERSON, ARISING
            FROM, RELATED WITH, AND/OR CONNECTED TO, ANY USE OF OR INABILITY TO USE THE SERVICES
            AND/OR THE REPORTS, EVEN IF VOICEFRONT HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGES. YOU EXPRESSLY ACKNOWLEDGES AND AGREES THAT USE OF THE SERVICES IS AT YOUR OWN
            RISK. IN ANY CASE, WITHOUT LIMITING THE GENERALITY OF THE FOREGOING AND TO THE MAXIMUM
            EXTENT LEGALLY PERMISSIBLE, VOICEFRONT'S, ITS LICENSORS', AFFILIATES' DISTRIBUTORS' AND
            RESELLERS' TOTAL AGGREGATE LIABILITY FOR ALL DAMAGES OR LOSSES WHATSOEVER ARISING
            HEREUNDER OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE THE CONSOLE AND/OR THE
            REPORTS AND/OR THE SERVICES SHALL IN NO EVENT EXCEED, IN THE AGGREGATE, THE TOTAL
            AMOUNTS ACTUALLY PAID TO VOICEFRONT UNDER THE APPLICABLE PURCHASE ORDER IN THE TWELVE
            (12) MONTH PERIOD PRECEDING THE EVENT GIVING RISE TO SUCH CLAIM. INASMUCH AS SOME
            JURISDICTIONS DO NOT ALLOW EXCLUSIONS OR LIMITATIONS AS SET FORTH HEREIN, THE FULL
            EXTENT OF THE ABOVE EXCLUSIONS AND LIMITATIONS MAY NOT APPLY.
          </p>
          <p className="terms__part">
            16. <strong>Indemnification</strong>. You agree to defend, indemnify and hold harmless
            VoiceFront, its officers, directors, employees and agents, from and against any and all
            claims, damages, obligations, losses, liabilities, costs, debts, and expenses (including
            but not limited to attorney's fees) arising from: (i) your unauthorized use of the
            Services; (ii) your violation of any term of this Agreement (including without
            limitation any warranties provided herein); and/or (iii) a third party claim, suit or
            proceeding that use of the End-User Data within the scope of this Agreement infringes
            any privacy right of a third party.
          </p>
          <p className="terms__part">
            17. <strong>Term and Termination</strong>. This Agreement shall enter into force and
            effect on the Effective Date and shall remain in full force and effect for the
            Evaluation Term and, to the extent that you wish to receive the Services also for the
            applicable Subscription Periods, then for such periods, unless earlier terminated as set
            forth herein (the "<strong>Term</strong>"). Either party may terminate this Agreement
            with immediate effect if the other party materially breaches this Agreement and such
            breach remains uncured (to the extent that the breach can be cured) fifteen (15) days
            after having received written notice thereof. In the event that either party becomes
            liquidated, dissolved, bankrupt or insolvent, whether voluntarily or involuntarily, or
            shall take any action to be so declared, the other party shall have the right to
            immediately terminate this Agreement. Upon termination or expiration of this Agreement:
            (i) VoiceFront will cease from providing the Services hereunder, the license granted to
            you under this Agreement shall expire, and you shall discontinue all further use of the
            Services; (ii) VoiceFront shall immediately return and /or permanently delete (as
            instructed by you) and certify to you, within fourteen (14) business days, that it has
            done so, all EndUser Data provided by you pursuant to this Agreement, provided that
            VoiceFront will retain any anonymous and non-identifiable information which derives from
            the use of the Services, as detailed in Section 7; (iii) any sums paid by you until the
            date of termination are non-refundable, and you shall not be relieved of your duty to
            discharge in full all due sums owed by you to VoiceFront under this Agreement until the
            date of termination or expiration hereof, which sums shall become immediately due and
            payable on the date of termination or expiration the Agreement. The provisions of this
            Agreement that, by their nature and content, must survive the termination of this
            Agreement in order to achieve the fundamental purposes of this Agreement shall so
            survive. Upon termination or expiration of this Agreement, you will lose all access to
            any End-User Data that VoiceFront may be storing in order to make the Services available
            to you. You shall be responsible to download the End-User Data prior to termination of
            this Agreement. Termination of this Agreement shall not limit VoiceFront from pursuing
            any other remedies available to it under the applicable law.
          </p>
          <p className="terms__part">
            18. <strong>Miscellaneous</strong>. This Agreement represents the complete agreement
            concerning the subject matter hereof and may be amended only by a written agreement
            executed by both parties. The failure of either party to enforce any rights granted
            hereunder or to take action against the other party in the event of any breach hereunder
            shall not be deemed a waiver by that party as to subsequent enforcement of rights or
            subsequent actions in the event of future breaches. If any provision of this Agreement
            is held to be unenforceable, such provision shall be reformed only to the extent
            necessary to make it enforceable. You may assign your rights or obligations under this
            Agreement without the prior written consent of VoiceFront Notwithstanding the foregoing,
            you may assign the Agreement without the consent of VoiceFront in connection with any
            merger (by operation of law or otherwise), consolidation, reorganization, change in
            control or sale of all or substantially all of your assets related to this Agreement or
            similar transaction. VoiceFront may assign its rights or obligations under this
            Agreement without restrictions. This Agreement shall be governed by and construed under
            the laws of the State of Israel, without reference to principles and laws relating to
            the conflict of laws. The competent courts of the State of Israel shall have the
            exclusive jurisdiction with respect to any dispute and action arising under or in
            relation to this Agreement. This Agreement does not, and shall not be construed to
            create any relationship, partnership, joint venture, employeremployee, agency, or
            franchisor-franchisee relationship between the parties. VoiceFront will not be liable
            for any delay or failure to provide the Services resulting from circumstances or causes
            beyond the reasonable control of VoiceFront (i.e., force majeure events).
          </p>
          <p className="text_center">* * * * * * * *</p>
        </div>
        <p className="terms__text text_uppercase">
          BY CLICKING "I ACCEPT", YOU ACKNOWLEDGE THAT (A) YOU HAVE READ AND
          REVIEWED THIS AGREEMENT IN ITS ENTIRETY, (B) YOU AGREE TO BE BOUND BY THIS AGREEMENT, (C)
          THE INDIVIDUAL SO CLICKING HAS THE POWER, AUTHORITY AND LEGAL RIGHT TO ENTER INTO THIS
          AGREEMENT ON BEHALF OF HIS/HER ORGANIZATION, AND (D) BY SO CLICKING, THIS AGREEMENT
          CONSTITUTES BINDING AND ENFORCEABLE OBLIGATIONS ON YOUR BEHALF.
        </p>
      </div>

      {/* <div className="terms__button-holder">
        <button
          type="button"
          className="button button__submit button__submit_terms"
          onClick={handleOnClick}
        >
          ACCEPT
        </button>
      </div> */}
    </>
  );
};
export default Terms;
