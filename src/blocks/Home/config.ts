import type { Block } from 'payload'

export const HomeBlock: Block = {
  slug: 'home-block',
  interfaceName: 'HomeBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'pageType',
      type: 'select',
      required: true,
      options: [
        { label: 'Home Page', value: 'home' },
        { label: 'Rider Register', value: 'rider' },
        { label: 'Restaurant Register', value: 'restaurant' },
      ],
    },
    // Shared fields for all pages
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Meta Title',
    },
    {
      name: 'metaDesc',
      type: 'textarea',
      label: 'Meta Description',
    },

    // =============================================
    // HOME PAGE FIELDS
    // =============================================

    // HOME: Section Types
    {
      name: 'homeSections',
      type: 'array',
      label: 'Home Page Sections',
      admin: {
        condition: (data) => data.pageType === 'home',
      },
      fields: [
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            { label: 'Hero Section', value: 'hero' },
            { label: 'Features Section', value: 'features' },
            { label: 'Registration Section', value: 'registration' },
            { label: 'Testimonials Section', value: 'testimonials' },
            { label: 'FAQ Section', value: 'faqs' },
          ],
        },
        // Hero fields
        {
          name: 'heroHeading',
          type: 'text',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'hero',
          },
        },
        {
          name: 'heroSubheading',
          type: 'textarea',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'hero',
          },
        },
        {
          name: 'heroImg',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'hero',
          },
        },
        {
          name: 'heroWaitlistText',
          type: 'text',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'hero',
          },
        },
        {
          name: 'heroButtonText',
          type: 'text',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'hero',
          },
        },
        {
          name: 'heroPlaceholder',
          type: 'text',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'hero',
          },
        },

        // Features fields
        {
          name: 'featuresHeading',
          type: 'text',
          defaultValue: 'Why Choose Us?',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'features',
          },
        },
        {
          name: 'featuresList',
          type: 'array',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'features',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'desc',
              type: 'textarea',
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },

        // Registration fields
        {
          name: 'regType',
          type: 'select',
          options: [
            { label: 'Register as Rider', value: 'rider' },
            { label: 'Register Restaurant', value: 'restaurant' },
            { label: 'Both', value: 'both' },
          ],
          defaultValue: 'both',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'registration',
          },
        },
        {
          name: 'riderHeading',
          type: 'text',
          defaultValue: 'Register as a Rider',
          admin: {
            condition: (data, siblingData) =>
              siblingData.type === 'registration' &&
              (siblingData.regType === 'rider' || siblingData.regType === 'both'),
          },
        },
        {
          name: 'riderDesc',
          type: 'textarea',
          admin: {
            condition: (data, siblingData) =>
              siblingData.type === 'registration' &&
              (siblingData.regType === 'rider' || siblingData.regType === 'both'),
          },
        },
        {
          name: 'riderBtnText',
          type: 'text',
          defaultValue: 'Register Now',
          admin: {
            condition: (data, siblingData) =>
              siblingData.type === 'registration' &&
              (siblingData.regType === 'rider' || siblingData.regType === 'both'),
          },
        },
        {
          name: 'riderImg',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (data, siblingData) =>
              siblingData.type === 'registration' &&
              (siblingData.regType === 'rider' || siblingData.regType === 'both'),
          },
        },
        {
          name: 'restHeading',
          type: 'text',
          defaultValue: 'Register Your Restaurant',
          admin: {
            condition: (data, siblingData) =>
              siblingData.type === 'registration' &&
              (siblingData.regType === 'restaurant' || siblingData.regType === 'both'),
          },
        },
        {
          name: 'restDesc',
          type: 'textarea',
          admin: {
            condition: (data, siblingData) =>
              siblingData.type === 'registration' &&
              (siblingData.regType === 'restaurant' || siblingData.regType === 'both'),
          },
        },
        {
          name: 'restBtnText',
          type: 'text',
          defaultValue: 'Register Now',
          admin: {
            condition: (data, siblingData) =>
              siblingData.type === 'registration' &&
              (siblingData.regType === 'restaurant' || siblingData.regType === 'both'),
          },
        },
        {
          name: 'restImg',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (data, siblingData) =>
              siblingData.type === 'registration' &&
              (siblingData.regType === 'restaurant' || siblingData.regType === 'both'),
          },
        },

        // Testimonials fields
        {
          name: 'testimonialHeading',
          type: 'text',
          defaultValue: 'What Our Customers Say',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'testimonials',
          },
        },
        {
          name: 'testimonialSubhead',
          type: 'text',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'testimonials',
          },
        },
        {
          name: 'testimonialList',
          type: 'array',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'testimonials',
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'role',
              type: 'text',
            },
            {
              name: 'quote',
              type: 'textarea',
              required: true,
            },
            {
              name: 'rating',
              type: 'number',
              min: 1,
              max: 5,
            },
            {
              name: 'photo',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },

        // FAQ fields
        {
          name: 'faqHeading',
          type: 'text',
          defaultValue: "Got questions? We'll answer them all",
          admin: {
            condition: (data, siblingData) => siblingData.type === 'faqs',
          },
        },
        {
          name: 'faqList',
          type: 'array',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'faqs',
          },
          fields: [
            {
              name: 'question',
              type: 'text',
              required: true,
            },
            {
              name: 'answer',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },

    // =============================================
    // RIDER REGISTRATION PAGE FIELDS
    // =============================================

    // RIDER: Header
    {
      name: 'riderHdrTitle',
      type: 'text',
      defaultValue: 'Join as a Rider & Start Earning Today!',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Header Title',
    },
    {
      name: 'riderHdrSubtitle',
      type: 'textarea',
      defaultValue:
        'Fill in your details to become a part of our trusted halal food delivery network. Flexible hours, great earnings, and a rewarding experience await!',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Header Subtitle',
    },
    {
      name: 'riderHdrImg',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Header Image',
    },

    // RIDER: Basic Info Section
    {
      name: 'riderBasicTitle',
      type: 'text',
      defaultValue: 'Basic Information',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Basic Info Section Title',
    },

    // Name Field
    {
      name: 'riderNameOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show Name Field',
    },
    {
      name: 'riderNameLbl',
      type: 'text',
      defaultValue: 'Full Name',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Name Field Label',
    },
    {
      name: 'riderNameReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Name Field Required',
    },

    // Email Field
    {
      name: 'riderEmailOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show Email Field',
    },
    {
      name: 'riderEmailLbl',
      type: 'text',
      defaultValue: 'Email Address',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Email Field Label',
    },
    {
      name: 'riderEmailReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Email Field Required',
    },

    // Phone Field
    {
      name: 'riderPhoneOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show Phone Field',
    },
    {
      name: 'riderPhoneLbl',
      type: 'text',
      defaultValue: 'Phone Number',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Phone Field Label',
    },
    {
      name: 'riderPhoneReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Phone Field Required',
    },

    // DOB Field
    {
      name: 'riderDobOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show Date of Birth Field',
    },
    {
      name: 'riderDobLbl',
      type: 'text',
      defaultValue: 'Date of Birth',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Date of Birth Field Label',
    },
    {
      name: 'riderDobReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Date of Birth Field Required',
    },

    // Gender Field
    {
      name: 'riderGenderOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show Gender Field',
    },
    {
      name: 'riderGenderLbl',
      type: 'text',
      defaultValue: 'Gender',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Gender Field Label',
    },
    {
      name: 'riderGenderReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Gender Field Required',
    },
    {
      name: 'riderGenderOpts',
      type: 'text',
      defaultValue: 'Male, Female, Other',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Gender Options',
    },

    // RIDER: Identity Section
    {
      name: 'riderIdTitle',
      type: 'text',
      defaultValue: 'Identity & Documentation',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Identity Section Title',
    },

    // Govt ID Field
    {
      name: 'riderGovIdOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show Govt ID Field',
    },
    {
      name: 'riderGovIdLbl',
      type: 'text',
      defaultValue: 'Government-issued ID (Upload)',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Govt ID Field Label',
    },
    {
      name: 'riderGovIdReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Govt ID Field Required',
    },

    // License Field
    {
      name: 'riderLicenseOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show License Field',
    },
    {
      name: 'riderLicenseLbl',
      type: 'text',
      defaultValue: "Driver's License (if using a motor vehicle)",
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'License Field Label',
    },
    {
      name: 'riderLicenseReq',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'License Field Required',
    },

    // Photo Field
    {
      name: 'riderPhotoOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show Photo Field',
    },
    {
      name: 'riderPhotoLbl',
      type: 'text',
      defaultValue: 'Profile Photo (Clear face image)',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Photo Field Label',
    },
    {
      name: 'riderPhotoReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Photo Field Required',
    },

    // Vehicle Registration Field
    {
      name: 'riderVehRegOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show Vehicle Registration Field',
    },
    {
      name: 'riderVehRegLbl',
      type: 'text',
      defaultValue: 'Vehicle Registration (if applicable)',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Vehicle Registration Field Label',
    },
    {
      name: 'riderVehRegReq',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Vehicle Registration Field Required',
    },

    // Address Proof Field
    {
      name: 'riderAddrOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show Address Proof Field',
    },
    {
      name: 'riderAddrLbl',
      type: 'text',
      defaultValue: 'Proof of Address (Upload)',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Address Proof Field Label',
    },
    {
      name: 'riderAddrReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Address Proof Field Required',
    },

    // RIDER: Banking Section
    {
      name: 'riderBankTitle',
      type: 'text',
      defaultValue: 'Banking & Payment Details',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Banking Section Title',
    },

    // Bank Account Field
    {
      name: 'riderBankAccOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show Bank Account Field',
    },
    {
      name: 'riderBankAccLbl',
      type: 'text',
      defaultValue: 'Bank Account Details for Payouts',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Bank Account Field Label',
    },
    {
      name: 'riderBankAccReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Bank Account Field Required',
    },

    // UPI Field
    {
      name: 'riderUpiOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show UPI Field',
    },
    {
      name: 'riderUpiLbl',
      type: 'text',
      defaultValue: 'UPI/Mobile Payment Option (if applicable)',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'UPI Field Label',
    },
    {
      name: 'riderUpiReq',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'UPI Field Required',
    },

    // RIDER: Work Preferences
    {
      name: 'riderWorkTitle',
      type: 'text',
      defaultValue: 'Work Preferences',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Work Preferences Section Title',
    },

    // Working Hours Field
    {
      name: 'riderHoursOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show Working Hours Field',
    },
    {
      name: 'riderHoursLbl',
      type: 'text',
      defaultValue: 'Preferred Working Hours',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Working Hours Field Label',
    },
    {
      name: 'riderHoursReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Working Hours Field Required',
    },

    // Delivery Type Field
    {
      name: 'riderDelTypeOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show Delivery Type Field',
    },
    {
      name: 'riderDelTypeLbl',
      type: 'text',
      defaultValue: 'Select Mode of Delivery',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Delivery Type Field Label',
    },
    {
      name: 'riderDelTypeReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Delivery Type Field Required',
    },
    {
      name: 'riderDelTypeOpts',
      type: 'array',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'value', type: 'text' },
      ],
      defaultValue: [
        { label: 'Bicycle', value: 'bicycle' },
        { label: 'Motorcycle', value: 'motorcycle' },
        { label: 'Car', value: 'car' },
        { label: 'Scooter', value: 'scooter' },
        { label: 'On Foot', value: 'foot' },
      ],
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Delivery Type Options',
    },

    // RIDER: Other Details
    {
      name: 'riderOtherTitle',
      type: 'text',
      defaultValue: 'Other Details',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Other Details Section Title',
    },

    // Emergency Contact Field
    {
      name: 'riderEmergOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show Emergency Contact Field',
    },
    {
      name: 'riderEmergLbl',
      type: 'text',
      defaultValue: 'Emergency Contact',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Emergency Contact Field Label',
    },
    {
      name: 'riderEmergReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Emergency Contact Field Required',
    },

    // Referral Code Field
    {
      name: 'riderRefCodeOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show Referral Code Field',
    },
    {
      name: 'riderRefCodeLbl',
      type: 'text',
      defaultValue: 'Referral Code (if applicable)',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Referral Code Field Label',
    },
    {
      name: 'riderRefCodeReq',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Referral Code Field Required',
    },

    // Terms Field
    {
      name: 'riderTermsOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show Terms Field',
    },
    {
      name: 'riderTermsLbl',
      type: 'text',
      defaultValue: 'Agree to terms and conditions',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Terms Field Label',
    },
    {
      name: 'riderTermsReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Terms Field Required',
    },

    // RIDER: Form Submit
    {
      name: 'riderSubmitBtn',
      type: 'text',
      defaultValue: 'SEND',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Submit Button Text',
    },
    {
      name: 'riderSuccessMsg',
      type: 'textarea',
      defaultValue:
        'Thank you for your application! We will review your details and contact you soon.',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Success Message',
    },
    {
      name: 'riderEmailNotify',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Send email notification on submission',
    },

    // RIDER: FAQs
    {
      name: 'riderFaqOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'Show FAQ Section',
    },
    {
      name: 'riderFaqTitle',
      type: 'text',
      defaultValue: 'Frequently asked questions',
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'FAQ Section Title',
    },
    {
      name: 'riderFaqList',
      type: 'array',
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
      defaultValue: [
        {
          question: 'What are the requirements to become a delivery rider?',
          answer:
            'Providing personal information including name, age, mobile number, vehicle type, and attaching all necessary documents which includes:',
        },
        {
          question: 'How do I get paid?',
          answer:
            'You can receive payments through bank transfers or mobile payment options like UPI as per your preference.',
        },
        {
          question: 'What areas can I deliver in?',
          answer:
            'You can choose your preferred delivery area based on your location and convenience.',
        },
      ],
      admin: {
        condition: (data) => data.pageType === 'rider',
      },
      label: 'FAQ List',
    },

    // =============================================
    // RESTAURANT REGISTRATION PAGE FIELDS
    // =============================================

    // RESTAURANT: Header
    {
      name: 'restHdrTitle',
      type: 'text',
      defaultValue: 'Register Your Restaurant & Grow Business!!',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Header Title',
    },
    {
      name: 'restHdrSubtitle',
      type: 'textarea',
      defaultValue:
        "Join our halal-certified platform to reach more customers, boost orders, and expand your restaurant's visibility. Fill in your details to get started!",
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Header Subtitle',
    },
    {
      name: 'restHdrImg',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Header Image',
    },

    // RESTAURANT: Basic Info Section
    {
      name: 'restBasicTitle',
      type: 'text',
      defaultValue: 'Basic Information',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Basic Info Section Title',
    },

    // Restaurant Name Field
    {
      name: 'restNameOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Restaurant Name Field',
    },
    {
      name: 'restNameLbl',
      type: 'text',
      defaultValue: 'Restaurant Name',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Restaurant Name Field Label',
    },
    {
      name: 'restNameReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Restaurant Name Field Required',
    },

    // Owner Name Field
    {
      name: 'restOwnerOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Owner Name Field',
    },
    {
      name: 'restOwnerLbl',
      type: 'text',
      defaultValue: 'Owner/Manager Name',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Owner Name Field Label',
    },
    {
      name: 'restOwnerReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Owner Name Field Required',
    },

    // Email Field
    {
      name: 'restEmailOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Email Field',
    },
    {
      name: 'restEmailLbl',
      type: 'text',
      defaultValue: 'Contact Email',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Email Field Label',
    },
    {
      name: 'restEmailReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Email Field Required',
    },

    // Phone Field
    {
      name: 'restPhoneOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Phone Field',
    },
    {
      name: 'restPhoneLbl',
      type: 'text',
      defaultValue: 'Phone Number',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Phone Field Label',
    },
    {
      name: 'restPhoneReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Phone Field Required',
    },

    // RESTAURANT: Business Details
    {
      name: 'restBizTitle',
      type: 'text',
      defaultValue: 'Business Details',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Business Details Section Title',
    },

    // Address Field
    {
      name: 'restAddrOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Address Field',
    },
    {
      name: 'restAddrLbl',
      type: 'text',
      defaultValue: 'Restaurant Address',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Address Field Label',
    },
    {
      name: 'restAddrReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Address Field Required',
    },

    // Business Registration Number Field
    {
      name: 'restRegNumOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Registration Number Field',
    },
    {
      name: 'restRegNumLbl',
      type: 'text',
      defaultValue: 'Business Registration Number',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Registration Number Field Label',
    },
    {
      name: 'restRegNumReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Registration Number Field Required',
    },

    // Halal Certification Field
    {
      name: 'restHalalOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Halal Certification Field',
    },
    {
      name: 'restHalalLbl',
      type: 'text',
      defaultValue: 'FSSAI / Halal Certification',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Halal Certification Field Label',
    },
    {
      name: 'restHalalReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Halal Certification Field Required',
    },
    {
      name: 'restHalalFile',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Halal Certification Is File Upload',
    },

    // GST Number Field
    {
      name: 'restGstOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show GST Number Field',
    },
    {
      name: 'restGstLbl',
      type: 'text',
      defaultValue: 'GST Number (if applicable)',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'GST Number Field Label',
    },
    {
      name: 'restGstReq',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'GST Number Field Required',
    },

    // RESTAURANT: Menu Details
    {
      name: 'restMenuTitle',
      type: 'text',
      defaultValue: 'Menu Details',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Menu Details Section Title',
    },

    // Cuisine Type Field
    {
      name: 'restCuisineOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Cuisine Type Field',
    },
    {
      name: 'restCuisineLbl',
      type: 'text',
      defaultValue: 'Type of Cuisine',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Cuisine Type Field Label',
    },
    {
      name: 'restCuisineReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Cuisine Type Field Required',
    },

    // Operating Hours Field
    {
      name: 'restHoursOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Operating Hours Field',
    },
    {
      name: 'restHoursLbl',
      type: 'text',
      defaultValue: 'Operating Hours',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Operating Hours Field Label',
    },
    {
      name: 'restHoursReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Operating Hours Field Required',
    },

    // Preparation Time Field
    {
      name: 'restPrepOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Preparation Time Field',
    },
    {
      name: 'restPrepLbl',
      type: 'text',
      defaultValue: 'Average Preparation Time',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Preparation Time Field Label',
    },
    {
      name: 'restPrepReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Preparation Time Field Required',
    },

    // RESTAURANT: Financial Details
    {
      name: 'restFinTitle',
      type: 'text',
      defaultValue: 'Financial Details',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Financial Details Section Title',
    },

    // Bank Account Field
    {
      name: 'restBankOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Bank Account Field',
    },
    {
      name: 'restBankLbl',
      type: 'text',
      defaultValue: 'Bank Account No.',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Bank Account Field Label',
    },
    {
      name: 'restBankReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Bank Account Field Required',
    },

    // UPI Field
    {
      name: 'restUpiOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show UPI Field',
    },
    {
      name: 'restUpiLbl',
      type: 'text',
      defaultValue: 'UPI/Wallet Option',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'UPI Field Label',
    },
    {
      name: 'restUpiReq',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'UPI Field Required',
    },

    // RESTAURANT: Documents
    {
      name: 'restDocsTitle',
      type: 'text',
      defaultValue: 'Upload Documents',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Documents Section Title',
    },

    // Food License Field
    {
      name: 'restLicenseOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Food License Field',
    },
    {
      name: 'restLicenseLbl',
      type: 'text',
      defaultValue: 'Food License',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Food License Field Label',
    },
    {
      name: 'restLicenseReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Food License Field Required',
    },
    {
      name: 'restLicenseFile',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Food License Is File Upload',
    },

    // Logo Field
    {
      name: 'restLogoOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Logo Field',
    },
    {
      name: 'restLogoLbl',
      type: 'text',
      defaultValue: 'Restaurant Logo',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Logo Field Label',
    },
    {
      name: 'restLogoReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Logo Field Required',
    },
    {
      name: 'restLogoFile',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Logo Is File Upload',
    },

    // Menu File Field
    {
      name: 'restMenuFileOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Menu File Field',
    },
    {
      name: 'restMenuFileLbl',
      type: 'text',
      defaultValue: 'Sample Menu (PDF or Images)',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Menu File Field Label',
    },
    {
      name: 'restMenuFileReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Menu File Field Required',
    },
    {
      name: 'restMenuFileFile',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Menu File Is File Upload',
    },

    // Kitchen Photos Field
    {
      name: 'restKitchenOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Kitchen Photos Field',
    },
    {
      name: 'restKitchenLbl',
      type: 'text',
      defaultValue: 'Kitchen Photos',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Kitchen Photos Field Label',
    },
    {
      name: 'restKitchenReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Kitchen Photos Field Required',
    },
    {
      name: 'restKitchenFile',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Kitchen Photos Is File Upload',
    },

    // RESTAURANT: Other Details
    {
      name: 'restOtherTitle',
      type: 'text',
      defaultValue: 'Other Details',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Other Details Section Title',
    },

    // Delivery Preferences Field
    {
      name: 'restDeliveryOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Delivery Preferences Field',
    },
    {
      name: 'restDeliveryLbl',
      type: 'text',
      defaultValue: 'Delivery Preferences (App Riders)',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Delivery Preferences Field Label',
    },
    {
      name: 'restDeliveryReq',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Delivery Preferences Field Required',
    },
    {
      name: 'restDeliveryTxtArea',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Delivery Preferences Is Textarea',
    },

    // Terms Field
    {
      name: 'restTermsOn',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Show Terms Field',
    },
    {
      name: 'restTermsLbl',
      type: 'text',
      defaultValue: 'Agree to terms and conditions',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Terms Field Label',
    },
    {
      name: 'restTermsReq',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Terms Field Required',
    },

    // RESTAURANT: Form Submit
    {
      name: 'restSubmitBtn',
      type: 'text',
      defaultValue: 'SEND',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Submit Button Text',
    },
    {
      name: 'restSuccessMsg',
      type: 'textarea',
      defaultValue:
        'Thank you for registering your restaurant! We will review your details and contact you soon.',
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Success Message',
    },
    {
      name: 'restEmailNotify',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (data) => data.pageType === 'restaurant',
      },
      label: 'Send email notification on submission',
    },
  ],
}
