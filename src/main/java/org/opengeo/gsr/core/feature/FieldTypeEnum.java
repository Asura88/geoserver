/* Copyright (c) 2001 - 2012 TOPP - www.openplans.org. All rights reserved.
 * This code is licensed under the GPL 2.0 license, available at the root
 * application directory.
 */
package org.opengeo.gsr.core.feature;

import java.util.Date;

/**
 * 
 * @author Juan Marin, OpenGeo
 * 
 */
public enum FieldTypeEnum {

    SHORT_INTEGER("FieldTypeSmallInteger"), INTEGER("FieldTypeInteger"), SINGLE("FieldTypeSingle"), DOUBLE(
            "FieldTypeDouble"), STRING("FieldTypeString"), DATE("FieldTypeDate"), OID(
            "FieldTypeOID"), GEOMETRY("FieldTypeGeometry"), GUID("FieldTypeGUID");
    private final String fieldType;

    public String getFieldType() {
        return fieldType;
    }

    private FieldTypeEnum(String fieldType) {
        this.fieldType = fieldType;
    }

    public static FieldTypeEnum forClass(Class<?> binding) {
        if (String.class.equals(binding)) {
            return STRING;
        } else if (Double.class.equals(binding)) {
            return DOUBLE;
        } else if (Long.class.equals(binding)) {
            return INTEGER;
        } else if (Date.class.equals(binding)) {
            return DATE;
        } else {
            throw new RuntimeException("No FieldType equivalent known for " + binding);
        }
    }

}
