import React from "react";
import {
  Modal,
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  showCancel?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  messageStyle?: StyleProp<TextStyle>;
  confirmButtonStyle?: StyleProp<ViewStyle>;
  cancelButtonStyle?: StyleProp<ViewStyle>;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  title,
  message,
  confirmText = "Aceptar",
  cancelText = "Cancelar",
  onConfirm,
  showCancel = true,
  containerStyle,
  titleStyle,
  messageStyle,
  confirmButtonStyle,
  cancelButtonStyle,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <ThemedView style={[styles.modalContainer, containerStyle]}>
          {title && (
            <ThemedText style={[styles.title, titleStyle]}>{title}</ThemedText>
          )}
          {message && (
            <ThemedText style={[styles.message, messageStyle]}>
              {message}
            </ThemedText>
          )}

          <ThemedView style={styles.buttonContainer}>
            {showCancel && (
              <TouchableOpacity
                style={[styles.button, styles.cancelButton, cancelButtonStyle]}
                onPress={onClose}
              >
                <ThemedText style={styles.cancelText}>{cancelText}</ThemedText>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={[styles.button, styles.confirmButton, confirmButtonStyle]}
              onPress={onConfirm}
            >
              <ThemedText style={styles.confirmText}>{confirmText}</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    borderRadius: 10,
    padding: 20,
    width: "80%",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  confirmButton: {
    backgroundColor: "#0D6EFD",
  },
  confirmText: {
    fontWeight: "bold",
    color: "#fff",
  },
  cancelButton: {
    backgroundColor: "#DC3545",
  },
  cancelText: {
    fontWeight: "bold",
    color: "#fff",
  },
});

export default CustomModal;
