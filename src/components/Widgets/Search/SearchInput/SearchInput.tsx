import React, { useState, useEffect } from 'react';
import {InputContainer,SearchImage,SearchResults,Row,Container,MainContainer,DropDownArrow,BorderLabel,Inside,CancelIcon,} from './SearchInput.styles';
import Images from '../../../../assets/images/images';
import useComponentVisible from '../../IsComponentVisible/IsComponentVisible';
interface SearchInputProps {
	selectedItem?: any;
	results?: {LocalizedName:string,KeyCity:string }[];
	filterFunction: (inputSearch) => void;
	renderComponent: (object, onKeyChange) => React.ReactNode;
	onRightImageClick?: () => void;
	image: any;
	textPlaceholder: string;
	showDropDownArrow?: boolean;
	containerHeight?: string;
	containerWidth?: string;
	showBorderLabel?: boolean;
	borderLabelText?: string;
	displayList?: boolean;
	rightImage?: any;
	hideBorder?: boolean;
}

const SearchInput = ({
	selectedItem,
	results,
	filterFunction,
	renderComponent,
	image,
	textPlaceholder,
	showDropDownArrow,
	containerHeight,
	containerWidth,
	showBorderLabel,
	borderLabelText,
	displayList,
	rightImage,
	hideBorder,
	onRightImageClick,
}: SearchInputProps) => {
	const [inputSearch, setInputSearch] = useState(selectedItem || '');
	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

	useEffect(() => {
		setInputSearch(selectedItem || '');
	}, [selectedItem]);

	const onKeyChange = key => {
		setInputSearch(key);
		setIsComponentVisible( key !== '');
	};
	const onArrowClick = () => {
		setIsComponentVisible(!isComponentVisible);
	};

	const onSearchFocus = () => {
		setIsComponentVisible(true);
	};

	const onClearClick = () => {
		setInputSearch('');
		filterFunction('');
	};

	return (
		<Container ref={ref} containerHeight={containerHeight} containerWidth={containerWidth}>
			<MainContainer ref={ref} hideBorder={hideBorder}>
				{showBorderLabel && <BorderLabel>{borderLabelText}</BorderLabel>}
				<Inside showBorderLabel={showBorderLabel}>
					<SearchImage src={image} />
					<InputContainer
						placeholder={textPlaceholder}
						onChange={event => {
							filterFunction(event.target.value);
							onKeyChange(event.target.value);
						}}
						value={inputSearch}
						onFocus={onSearchFocus}
					/>
					{rightImage && <CancelIcon src={rightImage} onClick={() => onClearClick()} />}
					{showDropDownArrow && (
						<DropDownArrow
							src={Images.dropdown}
							onClick={() => onArrowClick()}
							arrowUp={isComponentVisible}
						/>
					)}
				</Inside>
			</MainContainer>
			{displayList !== false && isComponentVisible && (
				<SearchResults amountResults={results.length} displayList={displayList}>
					{results.map((value:{LocalizedName:string,KeyCity:string }, index:number) => {
						return (
							<Row key={`SEARCH_${index}`} onClick={() => setIsComponentVisible(false)}>
								{renderComponent(value, onKeyChange)}
							</Row>
						);
					})}
				</SearchResults>
			)}
		</Container>
	);
};

export default SearchInput;
