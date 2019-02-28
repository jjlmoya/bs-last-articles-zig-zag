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
	title: __('Last Articles Zig-Zag'),
	icon: 'editor-ol',
	category: 'bonseo-blocks',
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
					type="number"
					label={__('Entradas a mostrar:')}
					value={attributes.max_posts}
					onChange={max_posts => setAttributes({max_posts})}
				/>
				<TextControl
					className={`${className}__cta`}
					label={__('Boton CTA')}
					value={attributes.cta}
					onChange={cta => setAttributes({cta})}
				/>
				<TextControl
					className={`${className}__words`}
					type="number"
					label={__('Palabras')}
					value={attributes.words}
					onChange={words => setAttributes({words})}
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
