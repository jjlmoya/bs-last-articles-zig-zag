/**
 * BLOCK: bs-last-articles-zig-zag
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

import './style.scss';
import './editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl} = wp.components;
registerBlockType('bonseo/block-bs-last-articles-zig-zag', {
	title: __('bs-last-articles-zig-zag - BonSeo'),
	icon: 'editor-ol',
	category: 'common',
	keywords: [
		__('bs-last-articles-zig-zag'),
		__('BonSeo'),
		__('BonSeo Block'),
	],
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div>
				<h2> Últimos Posts ZigZag</h2>
				<TextControl
					className={`${className}__title`}
					label={__('Encabezado del bloque:')}
					value={attributes.content}
					onChange={content => setAttributes({content})}
				/>
				<TextControl
					className={`${className}__number`}
					label={__('Entradas a mostrar:')}
					value={attributes.max_posts}
					onChange={max_posts => setAttributes({max_posts})}
				/>
			</div>
		);
	},
	save: function () {
		return null;
	}
	,
})
;
