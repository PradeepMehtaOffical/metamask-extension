/* eslint-disable jest/require-top-level-describe */
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { ModalHeader } from './modal-header';

describe('ModalHeader', () => {
  it('should render modal header correctly', () => {
    const { getByTestId, container } = render(
      <ModalHeader data-testid="modal-header">Modal Header</ModalHeader>,
    );
    expect(getByTestId('modal-header')).toHaveClass('mm-modal-header');
    expect(container).toMatchSnapshot();
  });

  it('should render modal header title', () => {
    const { getByText } = render(
      <ModalHeader data-testid="modal-header">Modal Header Test</ModalHeader>,
    );
    expect(getByText('Modal Header Test')).toBeDefined();
  });

  it('should render modal header back button', () => {
    const onBackTest = jest.fn();
    const { getByTestId } = render(
      <ModalHeader
        data-testid="modal-header"
        onBack={onBackTest}
        backButtonProps={{ 'data-testid': 'back' }}
      >
        Modal Header
      </ModalHeader>,
    );

    const backButton = getByTestId('back');
    fireEvent.click(backButton);

    expect(onBackTest).toHaveBeenCalled();
  });

  it('should render modal header close button', () => {
    const onCloseTest = jest.fn();
    const { getByTestId } = render(
      <ModalHeader
        data-testid="modal-header"
        onClose={onCloseTest}
        closeButtonProps={{ 'data-testid': 'close' }}
      >
        Modal Header
      </ModalHeader>,
    );

    const closeButton = getByTestId('close');
    fireEvent.click(closeButton);

    expect(onCloseTest).toHaveBeenCalled();
  });
});
