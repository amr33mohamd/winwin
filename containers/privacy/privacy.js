import React, { Component } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import Back from "../../components/back";
import i18n from "../../utils/language";
export default class HelloWorldApp extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Back
          onPress={() => this.props.navigation.goBack()}
          title={i18n.t("privacy")}
          styles={{
            marginBottom: 0,
            borderBottomWidth: 0,
            flex: 0.1
          }}
        />
        <ScrollView style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Privacy Policy of WinWin
          </Text>
          <Text style={{ paddingHorizontal: 10, marginVertical: 5 }}>
            Effective date: June 13, 2019 WinWin ("us", "we", or "our") operates
            the WinWin website and the WinWin mobile application (hereinafter
            referred to as the "Service"). This page informs you of our policies
            regarding the collection, use and disclosure of personal data when
            you use our Service and the choices you have associated with that
            data. We use your data to provide and improve the Service. By using
            the Service, you agree to the collection and use of information in
            accordance with this policy. Unless otherwise defined in this
            Privacy Policy, the terms used in this Privacy Policy have the same
            meanings as in our Terms and Conditions.
          </Text>
          <Text style={{ fontWeight: "bold" }}>Definitions</Text>
          <Text style={{ paddingHorizontal: 10, marginVertical: 5 }}>
            Service Service means the WinWin website and the WinWin mobile
            application operated by WinWin Personal Data Personal Data means
            data about a living individual who can be identified from those data
            (or from those and other information either in our possession or
            likely to come into our possession). Usage Data Usage Data is data
            collected automatically either generated by the use of the Service
            or from the Service infrastructure itself (for example, the duration
            of a page visit). Cookies Cookies are small files stored on your
            device (computer or mobile device).
          </Text>
          <Text style={{ fontWeight: "bold" }}>
            Information Collection and Use
          </Text>
          <Text style={{ paddingHorizontal: 10, marginVertical: 5 }}>
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </Text>
          <Text style={{ fontWeight: "bold" }}>Types of Data Collected</Text>
          <Text style={{ paddingHorizontal: 10, marginVertical: 5 }}>
            Personal Data While using our Service, we may ask you to provide us
            with certain personally identifiable information that can be used to
            contact or identify you ("Personal Data"). Personally identifiable
            information may include, but is not limited to: Email First name and
            last Cookies and Usage Data We may use your Personal Data to contact
            you with newsletters, marketing or promotional materials and other
            information that may be of interest to you. You may opt out of
            receiving any, or all, of these communications from us by following
            the unsubscribe link or the instructions provided in any email we
            send. Usage Data We may also collect information that your browser
            sends whenever you visit our Service or when you access the Service
            by or through a mobile device ("Usage Data") This Usage Data may
            include information such as your computer's Internet Protocol
            address (e.g. IP address), browser type, browser version, the pages
            of our Service that you visit, the time and date of your visit, the
            time spent on those pages, unique device identifiers and other
            diagnostic data. When you access the Service with a mobile device,
            this Usage Data may include information such as the type of mobile
            device you use, your mobile device unique ID, the IP address of your
            mobile device, your mobile operating system, the type of mobile
            Internet browser you use, unique device identifiers and other
            diagnostic data. Location Data We may use and store information
            about your location if you give us permission to do so ("Location
            Data"). We use this data to provide features of our Service, to
            improve and customise our Service. You can enable or disable
            location services when you use our Service at any time by way of
            your device settings. Tracking & Cookies Data We use cookies and
            similar tracking technologies to track the activity on our Service
            and we hold certain information. Cookies are files with a small
            amount of data which may include an anonymous unique identifier.
            Cookies are sent to your browser from a website and stored on your
            device. Other tracking technologies are also used such as beacons,
            tags and scripts to collect and track information and to improve and
            analyse our Service. You can instruct your browser to refuse all
            cookies or to indicate when a cookie is being sent. However, if you
            do not accept cookies, you may not be able to use some portions of
            our Service. Examples of Cookies we use: Session Cookies: We use
            Session Cookies to operate our Service. Preference Cookies: We use
            Preference Cookies to remember your preferences and various
            settings. Security Cookies: We use Security Cookies for security
            purposes.
          </Text>
          <Text style={{ fontWeight: "bold" }}>Use of Data</Text>
          <Text style={{ paddingHorizontal: 10, marginVertical: 5 }}>
            WinWin uses the collected data for various purposes: To provide and
            maintain our Service To notify you about changes to our Service To
            allow you to participate in interactive features of our Service when
            you choose to do so To provide customer support To gather analysis
            or valuable information so that we can improve our Service To
            monitor the usage of our Service To detect, prevent and address
            technical issues To provide you with news, special offers and
            general information about other goods, services and events which we
            offer that are similar to those that you have already purchased or
            enquired about unless you have opted not to receive such information
          </Text>
          <Text style={{ fontWeight: "bold" }}>Transfer of Data</Text>
          <Text style={{ paddingHorizontal: 10, marginVertical: 5 }}>
            Your information, including Personal Data, may be transferred to —
            and maintained on — computers located outside of your state,
            province, country or other governmental jurisdiction where the data
            protection laws may differ from those of your jurisdiction. If you
            are located outside Egypt and choose to provide information to us,
            please note that we transfer the data, including Personal Data, to
            Egypt and process it there. Your consent to this Privacy Policy
            followed by your submission of such information represents your
            agreement to that transfer. WinWin will take all the steps
            reasonably necessary to ensure that your data is treated securely
            and in accordance with this Privacy Policy and no transfer of your
            Personal Data will take place to an organisation or a country unless
            there are adequate controls in place including the security of your
            data and other personal information.
          </Text>
          <Text style={{ fontWeight: "bold" }}>Disclosure of Data</Text>
          <Text style={{ paddingHorizontal: 10, marginVertical: 5 }}>
            Business Transaction If WinWin is involved in a merger, acquisition
            or asset sale, your Personal Data may be transferred. We will
            provide notice before your Personal Data is transferred and becomes
            subject to a different Privacy Policy. Disclosure for Law
            Enforcement Under certain circumstances, WinWin may be required to
            disclose your Personal Data if required to do so by law or in
            response to valid requests by public authorities (e.g. a court or a
            government agency). Legal Requirements WinWin may disclose your
            Personal Data in the good faith belief that such action is necessary
            to: To comply with a legal obligation To protect and defend the
            rights or property of WinWin To prevent or investigate possible
            wrongdoing in connection with the Service To protect the personal
            safety of users of the Service or the public To protect against
            legal liability Security of Data The security of your data is
            important to us but remember that no method of transmission over the
            Internet or method of electronic storage is 100% secure. While we
            strive to use commercially acceptable means to protect your Personal
            Data, we cannot guarantee its absolute security. Service Providers
            We may employ third party companies and individuals to facilitate
            our Service ("Service Providers"), provide the Service on our
            behalf, perform Service-related services or assist us in analysing
            how our Service is used. These third parties have access to your
            Personal Data only to perform these tasks on our behalf and are
            obligated not to disclose or use it for any other purpose. Links to
            Other Sites Our Service may contain links to other sites that are
            not operated by us. If you click a third party link, you will be
            directed to that third party's site. We strongly advise you to
            review the Privacy Policy of every site you visit. We have no
            control over and assume no responsibility for the content, privacy
            policies or practices of any third party sites or services.
            Children's Privacy Our Service does not address anyone under the age
            of 18 ("Children"). We do not knowingly collect personally
            identifiable information from anyone under the age of 18. If you are
            a parent or guardian and you are aware that your Child has provided
            us with Personal Data, please contact us. If we become aware that we
            have collected Personal Data from children without verification of
            parental consent, we take steps to remove that information from our
            servers. Changes to This Privacy Policy We may update our Privacy
            Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page. We will let you know
            via email and/or a prominent notice on our Service, prior to the
            change becoming effective and update the "effective date" at the top
            of this Privacy Policy. You are advised to review this Privacy
            Policy periodically for any changes. Changes to this Privacy Policy
            are effective when they are posted on this page.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
