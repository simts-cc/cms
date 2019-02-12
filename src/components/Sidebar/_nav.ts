export default {
	items: [
		{
			name: 'Home',
			url: '/dashboard',
			icon: 'icon-home',
			badge: {
				variant: 'info',
				text: 'NEW',
			},
		},
		{
			title: true,
			name: 'Theme',
			wrapper: {
				// optional wrapper object
				element: 'span', // required valid HTML5 element tag
				attributes: {}, // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
			},
			class: '', // optional class names space delimited list for title item ex: "text-center"
		},
		{
			name: 'Colors',
			url: '/theme/colors',
			icon: 'icon-drop',
		},
		{
			name: 'Typography',
			url: '/theme/typography',
			icon: 'icon-pencil',
		},
		{
			title: true,
			name: 'Components',
			wrapper: {
				element: 'span',
				attributes: {},
			},
		},
		{
			name: 'Base',
			url: '/base',
			icon: 'icon-puzzle',
			children: [
				{
					name: 'Breadcrumbs',
					url: '/base/breadcrumbs',
					icon: 'icon-puzzle',
				},
				{
					name: 'Cards',
					url: '/base/cards',
					icon: 'icon-puzzle',
				},
				{
					name: 'Carousels',
					url: '/base/carousels',
					icon: 'icon-puzzle',
				},
				{
					name: 'Collapses',
					url: '/base/collapses',
					icon: 'icon-puzzle',
				},
				{
					name: 'Dropdowns',
					url: '/base/dropdowns',
					icon: 'icon-puzzle',
				},
				{
					name: 'Jumbotrons',
					url: '/base/jumbotrons',
					icon: 'icon-puzzle',
				},
				{
					name: 'ListGroups',
					url: '/base/list-groups',
					icon: 'icon-puzzle',
				},
				{
					name: 'Navs',
					url: '/base/navs',
					icon: 'icon-puzzle',
				},
				{
					name: 'Paginations',
					url: '/base/paginations',
					icon: 'icon-puzzle',
				},
				{
					name: 'Popovers',
					url: '/base/popovers',
					icon: 'icon-puzzle',
				},
				{
					name: 'ProgressBar',
					url: '/base/progress-bar',
					icon: 'icon-puzzle',
				},
				{
					name: 'Switches',
					url: '/base/switches',
					icon: 'icon-puzzle',
				},
				{
					name: 'Tabs',
					url: '/base/tabs',
					icon: 'icon-puzzle',
				},
				{
					name: 'Tooltips',
					url: '/base/tooltips',
					icon: 'icon-puzzle',
				},
			],
		},
		{
			name: 'Buttons',
			url: '/buttons',
			icon: 'icon-cursor',
			children: [
				{
					name: 'Buttons',
					url: '/buttons/buttons',
					icon: 'icon-cursor',
				},
				{
					name: 'ButtonDropdowns',
					url: '/buttons/button-dropdowns',
					icon: 'icon-cursor',
				},
				{
					name: 'ButtonGroups',
					url: '/buttons/button-groups',
					icon: 'icon-cursor',
				},
				{
					name: 'LoadingButtons',
					url: '/buttons/loading-buttons',
					icon: 'icon-cursor',
				},
				{
					name: 'SocialButtons',
					url: '/buttons/social-buttons',
					icon: 'icon-cursor',
				},
			],
		},
		{
			name: 'Charts',
			url: '/charts',
			icon: 'icon-pie-chart',
		},
		{
			name: 'Editors',
			url: '/editors',
			icon: 'fa fa-code',
			children: [
				{
					name: 'TextEditors',
					url: '/editors/text-editors',
					icon: 'icon-note',
				},
				{
					name: 'CodeEditors',
					url: '/editors/code-editors',
					icon: 'fa fa-code',
				},
			],
		},
		{
			name: 'Forms',
			url: '/forms',
			icon: 'icon-note',
			children: [
				{
					name: 'BasicForms',
					url: '/forms/basic-forms',
					icon: 'icon-note',
				},
				{
					name: 'AdvancedForms',
					url: '/forms/advanced-forms',
					icon: 'icon-note',
				},
			],
		},
		{
			name: 'GoogleMaps',
			url: '/google-maps',
			icon: 'icon-map',
			badge: {
				variant: 'info',
				text: 'NEW',
			},
		},
		{
			name: 'Icons',
			url: '/icons',
			icon: 'icon-star',
			children: [
				{
					name: 'FontAwesome',
					url: '/icons/font-awesome',
					icon: 'icon-star',
					badge: {
						variant: 'secondary',
						text: '4.7',
					},
				},
				{
					name: 'SimpleLineIcons',
					url: '/icons/simple-line-icons',
					icon: 'icon-star',
				},
			],
		},
		{
			name: 'Notifications',
			url: '/notifications',
			icon: 'icon-bell',
			children: [
				{
					name: 'Alerts',
					url: '/notifications/alerts',
					icon: 'icon-bell',
				},
				{
					name: 'Badges',
					url: '/notifications/badges',
					icon: 'icon-bell',
				},
				{
					name: 'Modals',
					url: '/notifications/modals',
					icon: 'icon-bell',
				},
				{
					name: 'Toastr',
					url: '/notifications/toastr',
					icon: 'icon-bell',
				},
			],
		},
		{
			name: 'Plugins',
			url: '/plugins',
			icon: 'icon-energy',
			children: [
				{
					name: 'Calendar',
					url: '/plugins/calendar',
					icon: 'icon-calendar',
				},
				{
					name: 'Spinners',
					url: '/plugins/spinners',
					icon: 'fa fa-spinner',
				},
			],
		},
		{
			name: 'Tables',
			url: '/tables',
			icon: 'icon-list',
			children: [
				{
					name: 'DataTable',
					url: '/tables/datatable',
					icon: 'icon-list',
				},
				{
					name: 'Tables',
					url: '/tables/tables',
					icon: 'icon-list',
				},
			],
		},
		{
			name: 'Widgets',
			url: '/widgets',
			icon: 'icon-calculator',
			badge: {
				variant: 'info',
				text: 'NEW',
			},
		},
		{
			divider: true,
		},
		{
			title: true,
			name: 'Extras',
		},
		{
			name: 'Pages',
			url: '/pages',
			icon: 'icon-star',
			children: [
				{
					name: 'Error404',
					url: '/404',
					icon: 'icon-star',
				},
				{
					name: 'Error500',
					url: '/500',
					icon: 'icon-star',
				},
			],
		},
		{
			name: 'UIKits',
			url: '/ui-kits',
			icon: 'icon-layers',
			children: [
				{
					name: 'Invoicing',
					url: '/ui-kits/invoicing',
					icon: 'icon-speech',
					children: [
						{
							name: 'Invoice',
							url: '/ui-kits/invoicing/invoice',
							icon: 'icon-speech',
						},
					],
				},
				{
					name: 'Email',
					url: '/ui-kits/email',
					icon: 'icon-speech',
					children: [
						{
							name: 'Inbox',
							url: '/ui-kits/email/inbox',
							icon: 'icon-speech',
						},
						{
							name: 'Message',
							url: '/ui-kits/email/message',
							icon: 'icon-speech',
						},
						{
							name: 'Compose',
							url: '/ui-kits/email/compose',
							icon: 'icon-speech',
						},
					],
				},
			],
		},
		{
			divider: true,
			class: 'm-2',
		},
		{
			title: true,
			name: 'Labels',
		},
		{
			name: 'LabelDanger',
			url: '',
			icon: 'fa fa-circle',
			label: {
				variant: 'danger',
			},
		},
		{
			name: 'LabelInfo',
			url: '',
			icon: 'fa fa-circle',
			label: {
				variant: 'info',
			},
		},
		{
			name: 'LabelWarning',
			url: '',
			icon: 'fa fa-circle',
			label: {
				variant: 'warning',
			},
		},
	],
}
