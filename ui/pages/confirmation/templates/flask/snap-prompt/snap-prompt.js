import { ApprovalType } from '@metamask/controller-utils';
import { mapToTemplate } from '../../../../../components/app/flask/snap-ui-renderer';
import { DelineatorType } from '../../../../../helpers/constants/flask';

function getValues(pendingApproval, t, actions, _history, setInputState) {
  const {
    snapName,
    requestData: { content, placeholder },
  } = pendingApproval;

  return {
    content: [
      {
        element: 'Box',
        key: 'snap-dialog-content-wrapper',
        props: {
          marginLeft: 4,
          marginRight: 4,
        },
        children: {
          element: 'SnapDelineator',
          key: 'snap-delineator',
          props: {
            type: DelineatorType.Content,
            snapName,
          },
          children: [
            // TODO: Replace with SnapUIRenderer when we don't need to inject the input manually.
            mapToTemplate(content),
            {
              element: 'div',
              key: 'snap-prompt-container',
              children: {
                element: 'TextField',
                key: 'snap-prompt-input',
                props: {
                  className: 'snap-prompt-input',
                  placeholder,
                  max: 300,
                  onChange: (event) => {
                    const inputValue = event.target.value ?? '';
                    setInputState(ApprovalType.SnapDialogPrompt, inputValue);
                  },
                  theme: 'bordered',
                },
              },
              props: {
                className: 'snap-prompt',
              },
            },
          ],
        },
      },
    ],
    cancelText: t('cancel'),
    submitText: t('submit'),
    onSubmit: (inputValue) =>
      actions.resolvePendingApproval(pendingApproval.id, inputValue),
    onCancel: () => actions.resolvePendingApproval(pendingApproval.id, null),
  };
}

const snapConfirm = {
  getValues,
};

export default snapConfirm;
